# -*- coding: utf-8 -*-
"""
add_reasoning_questions.py -- tops up the 8 logical/verbal-reasoning
sub-skills that generate_questions.py deliberately skipped (its own
docstring: "templating those well enough to guarantee an unambiguous
single correct answer is a different, harder problem ... a wrong logic
question is worse than a missing one").

So these 80 questions (10 per sub-skill, 2 per difficulty 1-5) are
hand-authored and hand-verified here instead of templated: each answer is
checked directly in this file's comments/derivation, not generated from a
formula. This is the "real remaining work" seed_data.py's startup warning
flagged.

Idempotent guard: refuses to run twice (checks the last id per sub-skill
already exists) so re-running doesn't duplicate rows.

Run with:  python scripts/add_reasoning_questions.py
Then reseed the live DB with:  python -m backend.seed_data
"""
import csv
from pathlib import Path

QUESTION_BANK_CSV = Path(__file__).resolve().parent.parent / "data" / "question_bank.csv"

FIELDNAMES = ["id", "sub_skill", "difficulty", "text",
              "option_a", "option_b", "option_c", "option_d", "correct_answer"]


def row(qid, sub_skill, difficulty, text, options, correct):
    assert len(options) == 4, f"{qid}: need exactly 4 options"
    assert len(set(options)) == 4, f"{qid}: duplicate options {options}"
    assert correct in options, f"{qid}: correct answer not among options"
    return {
        "id": qid, "sub_skill": sub_skill, "difficulty": difficulty, "text": text,
        "option_a": options[0], "option_b": options[1], "option_c": options[2], "option_d": options[3],
        "correct_answer": correct,
    }


NEW_ROWS = []

# ---------------------------------------------------------------------------
# Blood Relations (existing 001-005 cover: grandfather/son/father/grandson/uncle)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("blood_relations_006", "Blood Relations", 1,
        "If A is B's son, and B is C's son, what is A to C?",
        ["Grandson", "Grandfather", "Uncle", "Nephew"], "Grandson"),
    row("blood_relations_007", "Blood Relations", 1,
        "If P is Q's daughter, and Q is male, what is Q to P?",
        ["Father", "Mother", "Uncle", "Brother"], "Father"),
    row("blood_relations_008", "Blood Relations", 2,
        "If A is B's father, and C is B's mother, what is C to A?",
        ["Wife", "Sister", "Daughter", "Mother"], "Wife"),
    row("blood_relations_009", "Blood Relations", 2,
        "If X is Y's sister, and Z is Y's son, what is X to Z?",
        ["Aunt", "Uncle", "Mother", "Cousin"], "Aunt"),
    row("blood_relations_010", "Blood Relations", 3,
        "If M is N's father, and N is O's mother, what is M to O?",
        ["Grandfather", "Grandmother", "Father", "Uncle"], "Grandfather"),
    row("blood_relations_011", "Blood Relations", 3,
        "If A is the son of B, and C is also a child of B, what is A to C?",
        ["Brother", "Sister", "Cousin", "Uncle"], "Brother"),
    row("blood_relations_012", "Blood Relations", 4,
        "A is B's mother. B is C's husband. D is B and C's son. What is A to D?",
        ["Grandmother", "Mother", "Aunt", "Grandfather"], "Grandmother"),
    row("blood_relations_013", "Blood Relations", 4,
        "R is male. R's only sister is S. S's only son is T. What is R to T?",
        ["Uncle", "Aunt", "Father", "Cousin"], "Uncle"),
    row("blood_relations_014", "Blood Relations", 5,
        "A is the son of B. B is the sister of C. C is the father of D. What is A to D?",
        ["Cousin", "Nephew", "Uncle", "Brother"], "Cousin"),
    row("blood_relations_015", "Blood Relations", 5,
        "P is Q's grandfather. Q is R's mother. S is R's sister. What is P to S?",
        ["Grandfather", "Father", "Great-grandfather", "Uncle"], "Grandfather"),
]

# ---------------------------------------------------------------------------
# Syllogisms (existing 001-005 cover the four classic forms)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("syllogisms_006", "Syllogisms", 1,
        "All dogs are mammals. All mammals are animals. Does it follow that all dogs are animals?",
        ["Yes, always", "No, never", "Only sometimes", "Cannot be determined"], "Yes, always"),
    row("syllogisms_007", "Syllogisms", 1,
        "All apples are fruits. Some fruits are red. Does it follow that all apples are red?",
        ["Yes, always", "No, not necessarily", "Only sometimes", "Cannot be determined"], "No, not necessarily"),
    row("syllogisms_008", "Syllogisms", 2,
        "All doctors are educated. No educated person is illiterate. Does it follow that no doctor is illiterate?",
        ["Yes, always", "No, never", "Only sometimes", "Cannot be determined"], "Yes, always"),
    row("syllogisms_009", "Syllogisms", 2,
        "No mammal is a fish. All whales are mammals. Does it follow that no whale is a fish?",
        ["Yes, always", "No, never", "Only sometimes", "Cannot be determined"], "Yes, always"),
    row("syllogisms_010", "Syllogisms", 3,
        "Some teachers are artists. Some artists are musicians. Does it follow that some teachers are musicians?",
        ["Yes, always", "No, not necessarily", "Only sometimes", "Cannot be determined"], "No, not necessarily"),
    row("syllogisms_011", "Syllogisms", 3,
        "Some students are athletes. All athletes are disciplined. Does it follow that some students are disciplined?",
        ["Yes, always", "No, not necessarily", "Only sometimes", "Cannot be determined"], "Yes, always"),
    row("syllogisms_012", "Syllogisms", 4,
        "All engineers are logical. Some logical people are also creative. Does it follow that all engineers are creative?",
        ["Yes, always", "No, not necessarily", "Only sometimes", "Cannot be determined"], "No, not necessarily"),
    row("syllogisms_013", "Syllogisms", 4,
        "No reptiles are warm-blooded. All snakes are reptiles. Does it follow that no snake is warm-blooded?",
        ["Yes, always", "No, never", "Only sometimes", "Cannot be determined"], "Yes, always"),
    row("syllogisms_014", "Syllogisms", 5,
        "All roses are flowers. No flowers are weeds. Some weeds are plants. Does it follow that no rose is a plant?",
        ["Yes, always", "No, not necessarily", "Only sometimes", "Cannot be determined"], "No, not necessarily"),
    row("syllogisms_015", "Syllogisms", 5,
        "All lawyers are graduates. All graduates are literate. Does it follow that no illiterate person is a lawyer?",
        ["Yes, always", "No, never", "Only sometimes", "Cannot be determined"], "Yes, always"),
]

# ---------------------------------------------------------------------------
# Statement & Conclusions (existing 001-005)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("statement_conclusions_006", "Statement & Conclusions", 1,
        "Statement: The library is closed on Sundays. Conclusion: The library is open on Mondays. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "No, does not follow"),
    row("statement_conclusions_007", "Statement & Conclusions", 1,
        "Statement: All buses leave from platform 3. Conclusion: Some buses leave from platform 3. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "Yes, follows"),
    row("statement_conclusions_008", "Statement & Conclusions", 2,
        "Statement: The shop offers a discount only to members. Conclusion: Non-members never get a discount from this shop. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "Yes, follows"),
    row("statement_conclusions_009", "Statement & Conclusions", 2,
        "Statement: It rained for three days last week. Conclusion: It will rain again next week. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "No, does not follow"),
    row("statement_conclusions_010", "Statement & Conclusions", 3,
        "Statement: Every winner of the competition received a certificate. Conclusion: Everyone who received a certificate won the competition. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "No, does not follow"),
    row("statement_conclusions_011", "Statement & Conclusions", 3,
        "Statement: The company hires only candidates with a degree. Ravi was hired by the company. Conclusion: Ravi has a degree. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "Yes, follows"),
    row("statement_conclusions_012", "Statement & Conclusions", 4,
        "Statement: Most members of the committee voted in favor of the proposal. Conclusion: The proposal was passed. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "Cannot be determined"),
    row("statement_conclusions_013", "Statement & Conclusions", 4,
        "Statement: The train was delayed due to heavy fog. Conclusion: The train usually runs on time in clear weather. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "Cannot be determined"),
    row("statement_conclusions_014", "Statement & Conclusions", 5,
        "Statement: Only employees with more than five years of experience are eligible for the senior manager role. Meena was promoted to senior manager. Conclusion: Meena has more than five years of experience. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "Yes, follows"),
    row("statement_conclusions_015", "Statement & Conclusions", 5,
        "Statement: If the budget is approved, the project will begin in March. The project began in March. Conclusion: The budget was approved. Does this necessarily follow?",
        ["Yes, follows", "No, does not follow", "Cannot be determined", "Partially follows"], "No, does not follow"),
]

# ---------------------------------------------------------------------------
# Venn Diagrams (existing 001-005)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("venn_diagrams_006", "Venn Diagrams", 1,
        "40 people like apples, 25 like oranges, and 10 like both. How many like at least one fruit?",
        ["45", "50", "55", "65"], "55"),
    row("venn_diagrams_007", "Venn Diagrams", 1,
        "In a survey, 20 people own a car, 15 own a bike, and 5 own both. How many own at least one vehicle?",
        ["25", "30", "35", "40"], "30"),
    row("venn_diagrams_008", "Venn Diagrams", 2,
        "In a class of 60, 35 play cricket and 25 play football, with 8 playing both. How many play neither?",
        ["4", "8", "12", "15"], "8"),
    row("venn_diagrams_009", "Venn Diagrams", 2,
        "In a group of 60 people, 50 like tea and 30 like coffee, and every person likes at least one of the two. How many like both?",
        ["10", "15", "20", "25"], "20"),
    row("venn_diagrams_010", "Venn Diagrams", 3,
        "In a group of 100 students, 60 study Physics, 45 study Chemistry, and 20 study both. How many study neither?",
        ["10", "15", "20", "25"], "15"),
    row("venn_diagrams_011", "Venn Diagrams", 3,
        "Set A has 30 elements, Set B has 20 elements, and their intersection has 12 elements. How many elements are in exactly one of the sets?",
        ["18", "20", "26", "38"], "26"),
    row("venn_diagrams_012", "Venn Diagrams", 4,
        "In a survey of 200 people, 120 read newspaper A, 90 read newspaper B, and 40 read both. How many read only A (and not B)?",
        ["40", "80", "90", "120"], "80"),
    row("venn_diagrams_013", "Venn Diagrams", 4,
        "Out of 150 students, 80 play chess, 70 play carrom, and 30 play neither. How many play both games?",
        ["20", "30", "40", "50"], "30"),
    row("venn_diagrams_014", "Venn Diagrams", 5,
        "In a class of 80 students: 40 like Math, 35 like Science, 30 like English, 15 like both Math and Science, "
        "10 like both Science and English, 12 like both Math and English, and 5 like all three. "
        "How many like at least one subject?",
        ["63", "68", "73", "78"], "73"),
    row("venn_diagrams_015", "Venn Diagrams", 5,
        "In a survey of 90 people: 50 use app A, 40 use app B, 30 use app C, 20 use both A and B, "
        "15 use both B and C, 10 use both A and C, and 5 use all three apps. How many use exactly one app?",
        ["35", "40", "45", "50"], "45"),
]

# ---------------------------------------------------------------------------
# Seating Arrangement (existing 001-005)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("seating_arrangement_006", "Seating Arrangement", 1,
        "In a row of 6 people, F is at the rightmost end and E is immediately to F's left. Who is in the second position from the right?",
        ["E", "F", "D", "C"], "E"),
    row("seating_arrangement_007", "Seating Arrangement", 1,
        "In a row of 7 people, C is exactly in the middle. What position is C in, counting from either end?",
        ["3rd", "4th", "5th", "6th"], "4th"),
    row("seating_arrangement_008", "Seating Arrangement", 2,
        "8 people sit in a row. If P is 3rd from the left, what position is P from the right?",
        ["5th", "6th", "7th", "8th"], "6th"),
    row("seating_arrangement_009", "Seating Arrangement", 2,
        "In a circular arrangement, how many immediate neighbours does any one person have in total (left and right combined)?",
        ["1", "2", "3", "4"], "2"),
    row("seating_arrangement_010", "Seating Arrangement", 3,
        "In a row of people, X is 4th from the left and 5th from the right. How many people are in the row?",
        ["7", "8", "9", "10"], "8"),
    row("seating_arrangement_011", "Seating Arrangement", 3,
        "6 people sit around a circular table, facing the center, equally spaced. How many degrees apart are two adjacent people, measured at the center?",
        ["45", "60", "72", "90"], "60"),
    row("seating_arrangement_012", "Seating Arrangement", 4,
        "In a row of 10 people, M is 6th from the left. If 2 more people join the row at the left end, what is M's new position from the left?",
        ["6th", "7th", "8th", "9th"], "8th"),
    row("seating_arrangement_013", "Seating Arrangement", 4,
        "At a circular table, 8 people are seated equally spaced, all facing the center. R sits 3 seats clockwise from S. How many seats separate them going counter-clockwise?",
        ["3", "4", "5", "6"], "5"),
    row("seating_arrangement_014", "Seating Arrangement", 5,
        "5 people A, B, C, D, E sit in a row. B sits second from the left. D sits immediately to B's right. "
        "E sits at the rightmost end. A sits immediately to the left of B. Which position does C sit in?",
        ["1st", "3rd", "4th", "5th"], "4th"),
    row("seating_arrangement_015", "Seating Arrangement", 5,
        "8 people sit around a circular table facing the center, equally spaced. P sits 2 seats clockwise from Q. "
        "R sits directly opposite Q. How many seats separate P and R, going clockwise from P to R?",
        ["2", "3", "4", "6"], "2"),
]

# ---------------------------------------------------------------------------
# Puzzles (existing 001-005)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("puzzles_006", "Puzzles", 1,
        "4 friends are ranked 1st to 4th in a quiz, no ties. P scored higher than Q, and Q scored higher than R. Who definitely did not score the lowest?",
        ["P", "Q", "R", "S"], "P"),
    row("puzzles_007", "Puzzles", 1,
        "3 boxes X, Y, Z have different weights. Box X is heavier than Box Y. Box Z is heavier than Box X. Which box is the heaviest?",
        ["X", "Y", "Z", "Cannot be determined"], "Z"),
    row("puzzles_008", "Puzzles", 2,
        "5 people have different ages. A is older than B but younger than C. D is older than C. Who is definitely the oldest among A, B, C, D?",
        ["A", "B", "C", "D"], "D"),
    row("puzzles_009", "Puzzles", 2,
        "4 houses are in a row, numbered 1 to 4 left to right. The green house is at position 1. The blue house is at position 2. "
        "The red house is immediately to the right of the blue house. Where is the red house?",
        ["1", "2", "3", "4"], "3"),
    row("puzzles_010", "Puzzles", 3,
        "4 people P, Q, R, S have different heights. P is taller than Q. R is taller than P. S is shorter than Q. Who is the tallest?",
        ["P", "Q", "R", "S"], "R"),
    row("puzzles_011", "Puzzles", 3,
        "Clue 1: The winner is not from Team A. Clue 2: The winner is either from Team B or Team C. Clue 3: The winner is not from Team C. Which team is the winner from?",
        ["Team A", "Team B", "Team C", "Cannot be determined"], "Team B"),
    row("puzzles_012", "Puzzles", 4,
        "5 runners finish a race with no ties. A finishes before B. B finishes before C. C finishes before D. E finishes last. "
        "What is the finishing order for the first four positions?",
        ["A, B, C, D", "A, C, B, D", "B, A, C, D", "A, B, D, C"], "A, B, C, D"),
    row("puzzles_013", "Puzzles", 4,
        "3 boxes are stacked. Box X is at the bottom. Box W is directly above Box X. Box Y is directly above Box W. "
        "What is the order from top to bottom?",
        ["Y, W, X", "W, Y, X", "X, W, Y", "X, Y, W"], "Y, W, X"),
    row("puzzles_014", "Puzzles", 5,
        "5 people P, Q, R, S, T have different ranks from 1st (highest) to 5th (lowest), no ties. T ranks 1st. P ranks 5th. "
        "Q ranks higher than exactly 2 people. R scored higher than S. What is the complete ranking from 1st to 5th?",
        ["T, R, Q, S, P", "T, Q, R, S, P", "T, R, Q, P, S", "R, T, Q, S, P"], "T, R, Q, S, P"),
    row("puzzles_015", "Puzzles", 5,
        "3 friends Asha, Bala, and Chitra each prefer a different sport (Cricket, Tennis, Badminton) and a different "
        "favorite color (Red, Blue, Green). Asha does not play Cricket. The Tennis player's favorite color is Blue. "
        "Bala's favorite color is Red. Chitra plays Cricket. What is Asha's sport?",
        ["Cricket", "Tennis", "Badminton", "Cannot be determined"], "Tennis"),
]

# ---------------------------------------------------------------------------
# Data Sufficiency (existing 001-005 are meta/conceptual; these are applied
# GMAT-style DS problems with two statements, each hand-verified below)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("data_sufficiency_006", "Data Sufficiency", 1,
        "What is the value of x? Statement 1: x + 5 = 12. Statement 2: x is a positive integer.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are needed", "Neither statement is sufficient"],
        "Statement 1 alone is sufficient"),
    row("data_sufficiency_007", "Data Sufficiency", 1,
        "What is the value of y? Statement 1: y is an even number. Statement 2: y = 10.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are needed", "Neither statement is sufficient"],
        "Statement 2 alone is sufficient"),
    row("data_sufficiency_008", "Data Sufficiency", 2,
        "What is the value of x? Statement 1: x^2 = 16. Statement 2: x > 0.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are sufficient, but neither alone", "Neither statement is sufficient, even together"],
        "Both statements together are sufficient, but neither alone"),
    row("data_sufficiency_009", "Data Sufficiency", 2,
        "Is the integer n divisible by 6? Statement 1: n is divisible by 2. Statement 2: n is divisible by 3.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are sufficient, but neither alone", "Neither statement is sufficient, even together"],
        "Both statements together are sufficient, but neither alone"),
    row("data_sufficiency_010", "Data Sufficiency", 3,
        "What is the value of a? Statement 1: a is a prime number less than 4. Statement 2: a is an even number.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are sufficient, but neither alone", "Neither statement is sufficient, even together"],
        "Both statements together are sufficient, but neither alone"),
    row("data_sufficiency_011", "Data Sufficiency", 3,
        "Is x > 10? Statement 1: x > 5. Statement 2: x > 15.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are needed", "Neither statement is sufficient"],
        "Statement 2 alone is sufficient"),
    row("data_sufficiency_012", "Data Sufficiency", 4,
        "What is the perimeter of a square? Statement 1: The side of the square is 5 cm. Statement 2: The area of the square is 25 sq cm.",
        ["Each statement alone is sufficient", "Both statements together are needed, but neither alone",
         "Neither statement is sufficient, even together", "Statement 1 alone is sufficient, but not Statement 2"],
        "Each statement alone is sufficient"),
    row("data_sufficiency_013", "Data Sufficiency", 4,
        "Is x = y? Statement 1: x^2 = y^2. Statement 2: x and y are both positive.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are sufficient, but neither alone", "Neither statement is sufficient, even together"],
        "Both statements together are sufficient, but neither alone"),
    row("data_sufficiency_014", "Data Sufficiency", 5,
        "A shop sold pens and pencils. What was the total revenue? Statement 1: The shop sold 50 pens at $2 each. "
        "Statement 2: The shop sold twice as many pencils as pens, at $1 each.",
        ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient",
         "Both statements together are sufficient, but neither alone", "Neither statement is sufficient, even together"],
        "Both statements together are sufficient, but neither alone"),
    row("data_sufficiency_015", "Data Sufficiency", 5,
        "Is the integer n a multiple of 12? Statement 1: n is a multiple of 4 and a multiple of 3. "
        "Statement 2: n is a multiple of 6 and a multiple of 8.",
        ["Each statement alone is sufficient", "Statement 1 alone is sufficient, but not Statement 2",
         "Statement 2 alone is sufficient, but not Statement 1", "Neither statement is sufficient, even together"],
        "Each statement alone is sufficient"),
]

# ---------------------------------------------------------------------------
# Data Interpretation (existing 001-005)
# ---------------------------------------------------------------------------
NEW_ROWS += [
    row("data_interpretation_006", "Data Interpretation", 1,
        "A pie chart sector spans 45 degrees. What percentage of the total does it represent?",
        ["10%", "12.5%", "15%", "20%"], "12.5%"),
    row("data_interpretation_007", "Data Interpretation", 1,
        "A bar graph shows monthly sales of 100 units in March and 150 units in April. Find the percentage increase.",
        ["33%", "40%", "50%", "60%"], "50%"),
    row("data_interpretation_008", "Data Interpretation", 2,
        "A pie chart shows Category C represents 15% of a total of 800. Find the value of Category C's sector.",
        ["100", "110", "120", "130"], "120"),
    row("data_interpretation_009", "Data Interpretation", 2,
        "A table shows total expenses of 1200 spread equally across 3 departments. Find the average expense per department.",
        ["300", "350", "400", "450"], "400"),
    row("data_interpretation_010", "Data Interpretation", 3,
        "A bar graph shows sales of 250 units in Q1 and 300 units in Q2. What is the ratio of Q1 sales to Q2 sales, in simplest form?",
        ["5:6", "4:5", "6:7", "3:4"], "5:6"),
    row("data_interpretation_011", "Data Interpretation", 3,
        "A pie chart shows Category D = 30% of a total of 600. Find the sector's central angle in degrees.",
        ["90", "100", "108", "120"], "108"),
    row("data_interpretation_012", "Data Interpretation", 4,
        "A table shows a student's marks: Test 1 = 70, Test 2 = 80, Test 3 = 90. Find the average marks across the three tests.",
        ["75", "78", "80", "85"], "80"),
    row("data_interpretation_013", "Data Interpretation", 4,
        "A bar graph shows a company's profit grew from 200 (last year) to 260 (this year). By what percentage did profit grow?",
        ["20%", "25%", "30%", "35%"], "30%"),
    row("data_interpretation_014", "Data Interpretation", 5,
        "A pie chart of a school's 900 students shows Science = 40%, Arts = 35%, and Commerce = the remainder. "
        "How many more students are in Science than in Commerce?",
        ["90", "115", "135", "150"], "135"),
    row("data_interpretation_015", "Data Interpretation", 5,
        "A table shows a shop's quarterly revenue: Q1=500, Q2=600, Q3=450, Q4=650. If total annual expenses were 1800, "
        "find the shop's overall profit for the year.",
        ["300", "350", "400", "450"], "400"),
]


def main():
    with open(QUESTION_BANK_CSV, newline="") as f:
        existing_ids = {r["id"] for r in csv.DictReader(f)}

    already_done = [r["id"] for r in NEW_ROWS if r["id"] in existing_ids]
    if already_done:
        raise SystemExit(
            f"Refusing to run: {len(already_done)} of these ids already exist in "
            f"question_bank.csv (e.g. {already_done[0]}). Already applied?"
        )

    with open(QUESTION_BANK_CSV, "a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writerows(NEW_ROWS)

    print(f"Appended {len(NEW_ROWS)} questions across "
          f"{len(set(r['sub_skill'] for r in NEW_ROWS))} sub-skills.")
    print("Now run: python -m backend.seed_data")


if __name__ == "__main__":
    main()
