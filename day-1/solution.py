import csv


def get_frequency_change_list():
    frequency_change_list = []
    with open("input.csv") as csv_file:
        frequency_change_list = [int(row[0]) for row in csv.reader(csv_file)]
    return frequency_change_list


def get_final_frequency(frequency_change_list):
    return sum(frequency_change_list)


def find_first_duplicate_frequency(
    current_frequency, frequency_history, frequency_change_list=None
):
    if frequency_change_list is None:
        frequency_change_list = get_frequency_change_list()

    first_duplicate_found = False
    for frequency_change in frequency_change_list:
        current_frequency += frequency_change
        if current_frequency in frequency_history:
            first_duplicate_found = True
            break
        else:
            frequency_history.append(current_frequency)

    if first_duplicate_found:
        return current_frequency

    return find_first_duplicate_frequency(
        current_frequency, frequency_history, frequency_change_list
    )


first_duplicate = find_first_duplicate_frequency(
    current_frequency=0, frequency_history=[], frequency_change_list=None
)
