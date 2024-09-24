from itertools import permutations
import traceback
import os

# Key functions
key_functions = ["01", "02", "03", "04", "11", "12", "13", "14"]

# Map of key function IDs to their names
key_function_names = {
    "01": "Shift",
    "02": "Ctrl_",
    "03": "WinKy",
    "04": "Alt__",
    "11": "Space",
    "12": "Enter",
    "13": "Tab__",
    "14": "BckSp",
}

# Pairs of keys that cannot be together in a group
disallowed_pairs = [
    ("01", "13"),  # Shift + Tab
    ("01", "02"),  # Shift + Ctrl
    ("01", "03"),  # Shift + Windows
    ("02", "04"),  # Ctrl + Alt
    ("03", "13"),  # Windows + Tab
    ("03", "02"),  # Windows + Ctrl
    ("04", "12"),  # Alt + Enter
    ("04", "13"),  # Alt + Tab
]

# Force a key to be in certain positions
force_key_in_group = [
    ("11", [2, 3, 4, 5]),  # Space in Thumb-Groups
    ("14", [6, 7]),  # Backspace in Right-Outer
    #("03", [0, 1, 2, 3, 4, 5]),  # Windows in Thumb-Groups or Left-Outer
    ("03", [2]),  # Windows in Thumb-Groups or Left-Outer
    ("01", [0, 1, 2, 3]),  # Shift in Thumb-Left or Left-Outer
    ("12", [4, 5, 6, 7]),  # Enter in Thumb-Right or Right-Outer
    ("02", [0, 1, 2, 3, 4, 5]),  # Control in Thumb-Groups or Left-Outer
]

# Function to check whether a layout adheres to the disallowed pairs rule
def is_valid_layout(layout, disallowed_pairs):
    groups = [layout[:2], layout[2:4], layout[4:6], layout[6:8]]
    for group in groups:
        for (a, b) in disallowed_pairs:
            if a in group and b in group:
                return False
    return True

# Function to check whether a layout adheres to the force key in group rule
def is_key_forced_in_group(layout, force_key_in_group):
    for (key, positions) in force_key_in_group:
        key_position = layout.index(key)
        if key_position not in positions:
            return False
    return True

try:
    # Generate all permutations of key functions
    all_permutations = permutations(key_functions)

    valid_layouts = []

    layout_counter = 1

    # Collect valid layouts
    for layout in all_permutations:
        if is_key_forced_in_group(layout, force_key_in_group) and is_valid_layout(layout, disallowed_pairs):
            layout_text = f"LT {layout_counter}:\n"
            for j, key in enumerate(layout):
                layout_text += f"({j}) {key_function_names[key]}\n"
            layout_text += "----\n"
            valid_layouts.append(layout_text)
            layout_counter += 1

    # Write valid layouts to 'layouts_list.txt'
    with open('layout_generator/layouts_list.txt', 'w') as file:
        for layout_text in valid_layouts:
            file.write(layout_text)

    print("Processing complete.")
    print(f"{len(valid_layouts)} valid layouts written to 'layout_generator/layouts_list.txt'.")

except Exception as e:
    print("An error occurred: ", str(e))
    traceback.print_exc()