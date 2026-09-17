# -*- coding: utf-8 -*-
"""
generate_questions.py -- brings the 27 arithmetic/formula-based sub-skills
from 5 questions each up to 15 (the execution plan's 15-20/sub-skill target),
by generating parameterised questions and computing the correct answer with
real arithmetic instead of typing ~270 answers by hand.

Deliberately does NOT touch the 8 sub-skills that are pure logical/verbal
reasoning (Blood Relations, Coding-Decoding's harder variants, Data
Interpretation, Data Sufficiency, Puzzles, Seating Arrangement, Statement &
Conclusions, Syllogisms, Venn Diagrams) -- templating those well enough to
guarantee an unambiguous single correct answer is a different, harder
problem than generating them badly, and a wrong logic question is worse
than a missing one. Coding-Decoding gets a generator (fixed-shift letter
ciphers are unambiguous); the rest of that group stays at 5 questions,
flagged in seed_data.py's output, as real remaining work for the team.

Run directly to append the generated rows to question_bank.csv:
    python generate_questions.py
Idempotent-ish: re-running appends a NEW batch with a different seed offset
unless you first revert question_bank.csv -- it does not deduplicate.
"""
import csv
import math
import random
from pathlib import Path

QUESTION_BANK_CSV = Path(__file__).parent / "question_bank.csv"
QUESTIONS_PER_NEW_DIFFICULTY = 2  # x5 difficulties = 10 new questions/topic


def make_row(qid, sub_skill, difficulty, text, options, correct):
    assert correct in options, f"{qid}: correct answer not among options"
    assert len(set(options)) == 4, f"{qid}: duplicate options {options}"
    return {
        "id": qid, "sub_skill": sub_skill, "difficulty": difficulty, "text": text,
        "option_a": options[0], "option_b": options[1], "option_c": options[2], "option_d": options[3],
        "correct_answer": correct,
    }


def shuffled_options(rng, correct, distractors):
    opts = [correct] + distractors[:3]
    rng.shuffle(opts)
    return opts


def near_misses(correct, deltas, count=3):
    """Distinct distractor values near `correct`. Tries the given offsets
    first (for plausible near-misses), then pads with a widening +-k
    fallback sequence so we always return `count` distinct values even if
    the caller's preferred offsets collide with each other or with
    `correct` itself."""
    seen = {correct}
    out = []
    fallback = [d for k in range(1, 25) for d in (k, -k)]
    for delta in list(deltas) + fallback:
        if len(out) >= count:
            break
        v = correct + delta
        if v not in seen:
            seen.add(v)
            out.append(v)
    return out


# ---------------------------------------------------------------------------
# One generator per sub-skill: (rng, difficulty) -> (text, options[4], correct)
# All options are returned as strings, matching question_bank.csv's format.
# ---------------------------------------------------------------------------

def gen_percentages(rng, d):
    base = rng.randint(2, 9) * 10 ** rng.randint(1, 2 + d // 2)
    pct = rng.choice([5, 10, 12, 15, 20, 25, 30, 40] if d <= 3 else [12, 15, 18, 24, 35, 45])
    correct = round(base * pct / 100)
    distractors = near_misses(correct, [round(base * (pct + 5) / 100) - correct or 5,
                                         round(base * (pct - 5) / 100) - correct or -5,
                                         round(correct * 0.1) or 3])
    text = f"What is {pct}% of {base}?"
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_profit_loss(rng, d):
    cp = rng.randint(2, 20) * 50
    pct = rng.choice([10, 15, 20, 25, 8, 12])
    is_profit = rng.choice([True, False]) if d > 1 else True
    sp = round(cp * (1 + pct / 100)) if is_profit else round(cp * (1 - pct / 100))
    if d <= 2:
        correct = abs(sp - cp)
        text = f"Cost Price is {cp} and Selling Price is {sp}. Find the {'profit' if is_profit else 'loss'}."
        distractors = near_misses(correct, [10, -10, 20])
    else:
        correct = pct
        text = (f"Cost Price is {cp} and Selling Price is {sp}. "
                f"Find the {'profit' if is_profit else 'loss'} percentage.")
        distractors = near_misses(correct, [5, -5, 3])
        opts = shuffled_options(rng, f"{correct}%", [f"{v}%" for v in distractors])
        return text, opts, f"{correct}%"
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_simple_interest(rng, d):
    p = rng.randint(2, 20) * 500
    r = rng.choice([4, 5, 6, 8, 10, 12])
    t = rng.randint(1, 2 + d)
    si = p * r * t // 100
    text = f"Find the Simple Interest on a principal of {p} at {r}% per annum for {t} year(s)."
    distractors = near_misses(si, [p * r // 100, -(p * r // 100) or -10, si // 10 or 5])
    opts = shuffled_options(rng, str(si), [str(v) for v in distractors])
    return text, opts, str(si)


def gen_compound_interest(rng, d):
    p = rng.randint(2, 10) * 500
    r = rng.choice([5, 10, 20])
    t = 1 if d <= 2 else rng.choice([2, 3])
    amount = p * (1 + r / 100) ** t
    ci = round(amount - p)
    text = f"Find the Compound Interest on {p} at {r}% per annum for {t} year(s)."
    si = p * r * t // 100
    distractors = near_misses(ci, [si - ci or 5, 10, -10])
    opts = shuffled_options(rng, str(ci), [str(v) for v in distractors])
    return text, opts, str(ci)


def gen_ratio_proportion(rng, d):
    a, b = rng.randint(2, 9), rng.randint(2, 9)
    g = math.gcd(a, b)
    a, b = a // g, b // g
    total = (a + b) * rng.randint(2, 5 + d)
    part_a = total * a // (a + b)
    text = f"Divide {total} in the ratio {a}:{b}. What is the smaller share?"
    correct = min(part_a, total - part_a)
    distractors = near_misses(correct, [total - correct - correct or 4, 5, -5])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_averages(rng, d):
    n = rng.randint(3, 4 + d // 2)
    nums = [rng.randint(10, 20 + d * 10) for _ in range(n)]
    avg = sum(nums) / n
    correct = round(avg, 1) if avg != int(avg) else int(avg)
    text = f"Find the average of: {', '.join(str(x) for x in nums)}."
    distractors = near_misses(correct if isinstance(correct, int) else round(correct), [1, -1, 2])
    correct_str = str(correct)
    opts = shuffled_options(rng, correct_str, [str(v) for v in distractors])
    return text, opts, correct_str


def gen_mixtures_alligations(rng, d):
    qa, pa = rng.randint(2, 8), rng.choice([10, 20, 30, 40])
    qb, pb = rng.randint(2, 8), rng.choice([50, 60, 70, 80])
    mix_price = round((qa * pa + qb * pb) / (qa + qb))
    text = (f"{qa} liters of a solution costing {pa}/liter is mixed with {qb} liters costing {pb}/liter. "
            f"What is the price per liter of the mixture (nearest integer)?")
    distractors = near_misses(mix_price, [5, -5, round((pa + pb) / 2) - mix_price or 3])
    opts = shuffled_options(rng, str(mix_price), [str(v) for v in distractors])
    return text, opts, str(mix_price)


def gen_partnership(rng, d):
    a, b = rng.randint(2, 9), rng.randint(2, 9)
    g = math.gcd(a, b)
    a, b = a // g, b // g
    profit = (a + b) * rng.randint(50, 200)
    share_a = profit * a // (a + b)
    text = f"A and B invest in the ratio {a}:{b}. If the total profit is {profit}, find A's share."
    distractors = near_misses(share_a, [profit - share_a - share_a or 20, 30, -30])
    opts = shuffled_options(rng, str(share_a), [str(v) for v in distractors])
    return text, opts, str(share_a)


def gen_time_distance(rng, d):
    speed = rng.choice([40, 50, 60, 72, 80, 90])
    time_h = rng.choice([1, 1.5, 2, 2.5, 3])
    dist = round(speed * time_h)
    text = f"A vehicle travels at {speed} km/h for {time_h} hours. What distance does it cover?"
    distractors = near_misses(dist, [speed, -speed, 10])
    opts = shuffled_options(rng, str(dist), [str(v) for v in distractors])
    return text, opts, str(dist)


def gen_trains(rng, d):
    len_train = rng.choice([100, 120, 150, 180, 200])
    speed_kmh = rng.choice([36, 45, 54, 60, 72, 90])
    speed_ms = speed_kmh * 5 / 18
    time_s = round(len_train / speed_ms)
    text = (f"A train {len_train} m long is running at {speed_kmh} km/h. "
            f"How many seconds does it take to cross a stationary pole?")
    distractors = near_misses(time_s, [2, -2, 5])
    opts = shuffled_options(rng, str(time_s), [str(v) for v in distractors])
    return text, opts, str(time_s)


def gen_boats_streams(rng, d):
    still = rng.choice([10, 12, 15, 18, 20])
    stream = rng.choice([2, 3, 4, 5])
    downstream = still + stream
    text = f"A boat's speed in still water is {still} km/h and the stream's speed is {stream} km/h. Find the downstream speed."
    distractors = near_misses(downstream, [still - stream - downstream or -2, 2, -3])
    opts = shuffled_options(rng, str(downstream), [str(v) for v in distractors])
    return text, opts, str(downstream)


def gen_time_work(rng, d):
    days_a = rng.choice([10, 12, 15, 20, 24])
    days_b = rng.choice([15, 20, 24, 30, 40])
    combined = round(1 / (1 / days_a + 1 / days_b), 1)
    text = f"A can finish a job in {days_a} days and B can finish it in {days_b} days. Working together, how many days will they take (nearest 0.1)?"
    distractors = near_misses(combined, [1, -1, 2])
    opts = shuffled_options(rng, str(combined), [str(v) for v in distractors])
    return text, opts, str(combined)


def gen_pipes_cisterns(rng, d):
    fill_hours = rng.choice([4, 5, 6, 8, 10])
    drain_hours = rng.choice([8, 10, 12, 15, 20])
    while drain_hours <= fill_hours:  # leak must drain slower than the pipe fills, or the tank never fills
        drain_hours = rng.choice([8, 10, 12, 15, 20, 24, 30])
    net_rate = 1 / fill_hours - 1 / drain_hours
    net_hours = round(1 / net_rate, 1)
    text = (f"A pipe fills a tank in {fill_hours} hours; a leak drains it in {drain_hours} hours. "
            f"With both open, how long to fill the tank (nearest 0.1 hours)?")
    distractors = near_misses(net_hours, [1, -1, 2])
    opts = shuffled_options(rng, str(net_hours), [str(v) for v in distractors])
    return text, opts, str(net_hours)


def gen_linear_equations(rng, d):
    x = rng.randint(2, 15 + d * 3)
    a, b = rng.randint(2, 9), rng.randint(1, 20)
    c = a * x + b
    text = f"Solve for x: {a}x + {b} = {c}"
    distractors = near_misses(x, [1, -1, 2])
    opts = shuffled_options(rng, str(x), [str(v) for v in distractors])
    return text, opts, str(x)


def gen_quadratic_equations(rng, d):
    r1, r2 = rng.randint(1, 5 + d), rng.randint(1, 5 + d)
    b = -(r1 + r2)
    c = r1 * r2
    b_str = f"+ {b}x" if b >= 0 else f"- {abs(b)}x"
    c_str = f"+ {c}" if c >= 0 else f"- {abs(c)}"
    text = f"Find the larger root of: x^2 {b_str} {c_str} = 0"
    correct = max(r1, r2)
    distractors = near_misses(correct, [1, -1, min(r1, r2) - correct or 2])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_progressions(rng, d):
    a1 = rng.randint(1, 10)
    diff = rng.randint(2, 6)
    n = rng.randint(5, 10 + d)
    nth = a1 + (n - 1) * diff
    text = f"An arithmetic progression starts at {a1} with common difference {diff}. Find the {n}th term."
    distractors = near_misses(nth, [diff, -diff, 1])
    opts = shuffled_options(rng, str(nth), [str(v) for v in distractors])
    return text, opts, str(nth)


def gen_basic_geometry(rng, d):
    a1 = rng.randint(30, 90)
    a2 = rng.randint(30, 90 - 0)
    a3 = 180 - a1 - a2
    if a3 <= 0:
        a2 = 180 - a1 - 10
        a3 = 10
    text = f"In a triangle, two angles are {a1} degrees and {a2} degrees. Find the third angle."
    distractors = near_misses(a3, [5, -5, 10])
    opts = shuffled_options(rng, str(a3), [str(v) for v in distractors])
    return text, opts, str(a3)


def gen_mensuration_2d(rng, d):
    shape = rng.choice(["rectangle", "square", "triangle"])
    if shape == "rectangle":
        l, w = rng.randint(4, 20), rng.randint(3, 15)
        correct = l * w
        text = f"Find the area of a rectangle with length {l} and width {w}."
    elif shape == "square":
        s = rng.randint(3, 20)
        correct = s * s
        text = f"Find the area of a square with side {s}."
    else:
        b, h = rng.randint(4, 20), rng.randint(3, 15)
        correct = b * h // 2
        text = f"Find the area of a triangle with base {b} and height {h}."
    distractors = near_misses(correct, [round(correct * 0.1) or 2, -(round(correct * 0.1) or 2), 5])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_mensuration_3d(rng, d):
    shape = rng.choice(["cube", "cuboid", "cylinder"])
    if shape == "cube":
        s = rng.randint(2, 10)
        correct = s ** 3
        text = f"Find the volume of a cube with side {s}."
    elif shape == "cuboid":
        l, w, h = rng.randint(2, 10), rng.randint(2, 10), rng.randint(2, 10)
        correct = l * w * h
        text = f"Find the volume of a cuboid with dimensions {l} x {w} x {h}."
    else:
        r, h = rng.randint(2, 7), rng.randint(3, 12)
        correct = round(22 / 7 * r * r * h)
        text = f"Find the volume of a cylinder with radius {r} and height {h} (use pi = 22/7, round to nearest integer)."
    distractors = near_misses(correct, [round(correct * 0.1) or 3, -(round(correct * 0.1) or 3), 7])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_permutation_combination(rng, d):
    n = rng.randint(4, 8 + d)
    r = rng.randint(2, min(n, 4))
    kind = rng.choice(["permutation", "combination"])
    if kind == "permutation":
        correct = math.perm(n, r)
        text = f"How many ways can {r} items be arranged out of {n} distinct items? (nPr)"
    else:
        correct = math.comb(n, r)
        text = f"How many ways can {r} items be chosen out of {n} distinct items? (nCr)"
    distractors = near_misses(correct, [max(1, correct // 10), -max(1, correct // 10), correct + r])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_probability(rng, d):
    kind = rng.choice(["dice", "coin", "cards"])
    if kind == "dice":
        target = rng.randint(1, 6)
        text = f"A fair die is rolled once. What is the probability of getting a {target}?"
        correct = "1/6"
        distractors = ["1/3", "1/2", "5/6"]
    elif kind == "coin":
        n = rng.choice([1, 2])
        if n == 1:
            text = "A fair coin is tossed once. What is the probability of getting heads?"
            correct = "1/2"
            distractors = ["1/4", "1/3", "3/4"]
        else:
            text = "A fair coin is tossed twice. What is the probability of getting exactly two heads?"
            correct = "1/4"
            distractors = ["1/2", "1/3", "3/4"]
    else:
        text = "One card is drawn from a standard 52-card deck. What is the probability it is an Ace?"
        correct = "1/13"
        distractors = ["1/4", "1/52", "4/13"]
    opts = shuffled_options(rng, correct, distractors)
    return text, opts, correct


def gen_clocks_calendars(rng, d):
    h = rng.randint(1, 12)
    m = rng.choice([0, 15, 20, 30, 40, 45])
    minute_angle = m * 6
    hour_angle = (h % 12) * 30 + m * 0.5
    diff = abs(hour_angle - minute_angle)
    diff = min(diff, 360 - diff)
    correct = round(diff)
    text = f"Find the angle between the hour and minute hands at {h}:{m:02d}."
    distractors = near_misses(correct, [15, -15, 30])
    opts = shuffled_options(rng, f"{correct} degrees", [f"{v} degrees" for v in distractors])
    return text, opts, f"{correct} degrees"


def gen_series(rng, d):
    kind = rng.choice(["arithmetic", "geometric"])
    if kind == "arithmetic":
        start = rng.randint(1, 10)
        diff = rng.randint(2, 8)
        seq = [start + i * diff for i in range(4)]
        correct = start + 4 * diff
    else:
        start = rng.randint(1, 4)
        ratio = rng.randint(2, 3)
        seq = [start * ratio ** i for i in range(4)]
        correct = start * ratio ** 4
    text = f"What comes next in the series: {', '.join(str(x) for x in seq)}, ?"
    distractors = near_misses(correct, [1, -1, 2 if kind == "arithmetic" else correct // 2])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_simplification(rng, d):
    a, b, c = rng.randint(2, 12), rng.randint(2, 12), rng.randint(2, 12)
    op_set = rng.choice(["add_mul", "sub_mul", "mul_add"])
    if op_set == "add_mul":
        text = f"Simplify: {a} + {b} x {c}"
        correct = a + b * c
    elif op_set == "sub_mul":
        text = f"Simplify: {a} x {b} - {c}"
        correct = a * b - c
    else:
        text = f"Simplify: ({a} + {b}) x {c}"
        correct = (a + b) * c
    distractors = near_misses(correct, [a + b + c - correct or 3, 5, -5])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


def gen_direction_sense(rng, d):
    east = rng.randint(3, 12)
    north = rng.randint(4, 9)
    # keep it a clean Pythagorean-ish pair when possible; otherwise round
    dist_sq = east * east + north * north
    correct = round(math.sqrt(dist_sq))
    text = (f"A person walks {east} km east, then {north} km north. "
            f"How far (nearest km) is the person from the starting point?")
    distractors = near_misses(correct, [east + north - correct or 2, 2, -2])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


CIPHER_SHIFT = 2  # fixed, documented shift so the rule is learnable and unambiguous


def _shift_word(word, shift):
    out = []
    for ch in word:
        if ch.isalpha():
            base = ord('A') if ch.isupper() else ord('a')
            out.append(chr((ord(ch) - base + shift) % 26 + base))
        else:
            out.append(ch)
    return "".join(out)


WORD_BANK = ["CAT", "DOG", "BIRD", "FISH", "TABLE", "CHAIR", "WATER", "MASTRR", "STUDY", "LEARN"]


def gen_coding_decoding(rng, d):
    word = rng.choice(WORD_BANK)
    direction = rng.choice(["encode", "decode"])
    if direction == "encode":
        correct = _shift_word(word, CIPHER_SHIFT)
        text = f"If each letter is shifted forward by {CIPHER_SHIFT} places in the alphabet, how is '{word}' written?"
    else:
        coded = _shift_word(word, CIPHER_SHIFT)
        correct = word
        text = f"Each letter has been shifted forward by {CIPHER_SHIFT} places. Decode: '{coded}'"
    distractor_words = [_shift_word(word, CIPHER_SHIFT + 1), _shift_word(word, CIPHER_SHIFT - 1), word[::-1]]
    distractors = [w for w in distractor_words if w != correct][:3]
    opts = shuffled_options(rng, correct, distractors)
    return text, opts, correct


def gen_number_systems(rng, d):
    kind = rng.choice(["digit_sum", "hcf", "lcm", "remainder"]) if d > 1 else "digit_sum"
    if kind == "digit_sum":
        n = rng.randint(100, 999) if d <= 3 else rng.randint(1000, 9999)
        correct = sum(int(ch) for ch in str(n))
        text = f"Find the sum of the digits of {n}."
        distractors = near_misses(correct, [1, -1, 2])
    elif kind == "hcf":
        a, b = rng.randint(10, 30 + d * 10), rng.randint(10, 30 + d * 10)
        correct = math.gcd(a, b)
        text = f"Find the HCF (GCD) of {a} and {b}."
        distractors = near_misses(correct, [1, -1, 2])
    elif kind == "lcm":
        a, b = rng.randint(4, 12 + d * 2), rng.randint(4, 12 + d * 2)
        correct = a * b // math.gcd(a, b)
        text = f"Find the LCM of {a} and {b}."
        distractors = near_misses(correct, [a, -a if a < correct else a, b])
    else:  # remainder
        n = rng.randint(50, 200 + d * 50)
        divisor = rng.randint(3, 11)
        correct = n % divisor
        text = f"Find the remainder when {n} is divided by {divisor}."
        distractors = near_misses(correct, [1, -1, 2])
    opts = shuffled_options(rng, str(correct), [str(v) for v in distractors])
    return text, opts, str(correct)


GENERATORS = {
    "Number Systems": gen_number_systems,
    "Percentages": gen_percentages,
    "Profit & Loss": gen_profit_loss,
    "Simple Interest": gen_simple_interest,
    "Compound Interest": gen_compound_interest,
    "Ratio & Proportion": gen_ratio_proportion,
    "Averages": gen_averages,
    "Mixtures & Alligations": gen_mixtures_alligations,
    "Partnership": gen_partnership,
    "Time & Distance": gen_time_distance,
    "Trains": gen_trains,
    "Boats & Streams": gen_boats_streams,
    "Time & Work": gen_time_work,
    "Pipes & Cisterns": gen_pipes_cisterns,
    "Linear Equations": gen_linear_equations,
    "Quadratic Equations": gen_quadratic_equations,
    "Progressions": gen_progressions,
    "Basic Geometry": gen_basic_geometry,
    "Mensuration 2D": gen_mensuration_2d,
    "Mensuration 3D": gen_mensuration_3d,
    "Permutation & Combination": gen_permutation_combination,
    "Probability": gen_probability,
    "Clocks & Calendars": gen_clocks_calendars,
    "Series": gen_series,
    "Simplification": gen_simplification,
    "Direction Sense": gen_direction_sense,
    "Coding-Decoding": gen_coding_decoding,
}

ID_SLUG = {
    "Number Systems": "number_systems",
    "Percentages": "percentages", "Profit & Loss": "profit_loss", "Simple Interest": "simple_interest",
    "Compound Interest": "compound_interest", "Ratio & Proportion": "ratio_proportion",
    "Averages": "averages", "Mixtures & Alligations": "mixtures_alligations", "Partnership": "partnership",
    "Time & Distance": "time_distance", "Trains": "trains", "Boats & Streams": "boats_streams",
    "Time & Work": "time_work", "Pipes & Cisterns": "pipes_cisterns", "Linear Equations": "linear_equations",
    "Quadratic Equations": "quadratic_equations", "Progressions": "progressions",
    "Basic Geometry": "basic_geometry", "Mensuration 2D": "mensuration_2d", "Mensuration 3D": "mensuration_3d",
    "Permutation & Combination": "permutation_combination", "Probability": "probability",
    "Clocks & Calendars": "clocks_calendars", "Series": "series", "Simplification": "simplification",
    "Direction Sense": "direction_sense", "Coding-Decoding": "coding_decoding",
}


def next_id_numbers(existing_rows):
    """Find the highest existing numeric suffix per sub_skill's id prefix,
    so generated ids continue the sequence (e.g. percentages_006, _007, ...)."""
    max_n = {}
    for r in existing_rows:
        slug = ID_SLUG.get(r["sub_skill"])
        if slug is None:
            continue
        parts = r["id"].rsplit("_", 1)
        if len(parts) == 2 and parts[1].isdigit():
            max_n[slug] = max(max_n.get(slug, 0), int(parts[1]))
    return max_n


def generate_new_rows(existing_rows, seed=7):
    start_n = next_id_numbers(existing_rows)
    new_rows = []
    for sub_skill, gen_fn in GENERATORS.items():
        slug = ID_SLUG[sub_skill]
        n = start_n.get(slug, 0)
        rng = random.Random(f"{seed}-{slug}")
        seen_texts = set(r["text"] for r in existing_rows if r["sub_skill"] == sub_skill)
        for difficulty in range(1, 6):
            made = 0
            attempts = 0
            while made < QUESTIONS_PER_NEW_DIFFICULTY and attempts < 20:
                attempts += 1
                text, options, correct = gen_fn(rng, difficulty)
                if text in seen_texts:
                    continue  # avoid accidental duplicate phrasing
                seen_texts.add(text)
                n += 1
                qid = f"{slug}_{n:03d}"
                new_rows.append(make_row(qid, sub_skill, difficulty, text, options, correct))
                made += 1
    return new_rows


def main():
    with open(QUESTION_BANK_CSV) as f:
        existing_rows = list(csv.DictReader(f))

    new_rows = generate_new_rows(existing_rows)

    fieldnames = ["id", "sub_skill", "difficulty", "text", "option_a", "option_b", "option_c", "option_d", "correct_answer"]
    with open(QUESTION_BANK_CSV, "a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        for row in new_rows:
            writer.writerow(row)

    by_skill = {}
    for r in new_rows:
        by_skill[r["sub_skill"]] = by_skill.get(r["sub_skill"], 0) + 1
    print(f"Appended {len(new_rows)} new questions across {len(by_skill)} sub-skills.")
    print(f"question_bank.csv total is now {len(existing_rows) + len(new_rows)}.")
    untouched = [
        "Blood Relations", "Data Interpretation", "Data Sufficiency", "Puzzles",
        "Seating Arrangement", "Statement & Conclusions", "Syllogisms", "Venn Diagrams",
    ]
    print(f"Still at 5 questions (not auto-generated -- pure logic/verbal reasoning, "
          f"needs manual authoring): {', '.join(untouched)}")


if __name__ == "__main__":
    main()
