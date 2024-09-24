import sys
import os

from PyQt5.QtGui import QFont
from PyQt5.QtWidgets import QApplication, QLabel, QVBoxLayout, QHBoxLayout, QPushButton, QWidget, QMessageBox


# Key function names
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

# Reverse mapping to get key IDs from names
name_to_key_id = {v: k for k, v in key_function_names.items()}

# Global Data
layouts = []
likes = set()
dislikes = set()
current_index = 0


# Load layouts from the 'layouts_list.txt' file
def load_layouts():
    global layouts, current_index, likes, dislikes
    layouts = []
    file_path = 'layout_generator/layouts_list.txt'
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            raw_data = [line.strip() for line in file.readlines() if line.strip()]

        # Extracting layouts from raw data
        index = 0
        while index < len(raw_data):
            if raw_data[index].startswith("LT"):
                layout = [""] * 8  # Placeholder for each of the 8 positions
                index += 1  # Skip "LT X:" line
                for pos in range(8):
                    if index < len(raw_data) and raw_data[index].startswith(f"({pos})"):
                        try:
                            # Extract key function name from line and find the corresponding ID
                            key_function_name = raw_data[index].split()[-1]
                            layout[pos] = name_to_key_id[key_function_name]
                        except (IndexError, KeyError):
                            layout[pos] = "_____"  # If parsing fails, assign an invalid ID
                        index += 1
                layouts.append(" ".join(layout))
            index += 1

        current_index = 0
        show_layout()
    else:
        print(f"{file_path} file not found.")


# Show current layout
def show_layout():
    global current_index
    if 0 <= current_index < len(layouts):
        layout = layouts[current_index].split()
        layout_text = ""
        layout_text += "#-------#                                        #-------#\n"
        layout_text += "|       |                                        |       |\n"
        layout_text += f"| {key_function_names.get(layout[0], layout[0])} |                                        | {key_function_names.get(layout[7], layout[7])} |\n"
        layout_text += "|       |                                        |       |\n"
        layout_text += "#-------#                                        #-------#\n"
        layout_text += "#-------#                                        #-------#\n"
        layout_text += "|       |                                        |       |\n"
        layout_text += f"| {key_function_names.get(layout[1], layout[1])} |                                        | {key_function_names.get(layout[6], layout[6])} |\n"
        layout_text += "|       |                                        |       |\n"
        layout_text += "#-------#                                        #-------#\n"
        layout_text += "         #-------# #-------# #-------# #-------#\n"
        layout_text += "         |       | |       | |       | |       |\n"
        layout_text += f"         | {key_function_names.get(layout[2], layout[2])} | | {key_function_names.get(layout[3], layout[3])} | | {key_function_names.get(layout[4], layout[4])} | | {key_function_names.get(layout[5], layout[5])} |\n"
        layout_text += "         |       | |       | |       | |       |\n"
        layout_text += "         #-------# #-------# #-------# #-------#"
        layout_label.setText(f"LT {current_index + 1}:\n{layout_text}")
    else:
        layout_label.setText("No more layouts")


# Show next layout
def next_layout():
    global current_index
    current_index += 1
    if current_index >= len(layouts):
        QMessageBox.information(window, "End", "There are no more layouts.")
        current_index = len(layouts)
    show_layout()


# Show previous layout
def prev_layout():
    global current_index
    if current_index > 0:
        current_index -= 1
    show_layout()


# Initialize GUI
app = QApplication(sys.argv)
window = QWidget()
window.setWindowTitle("Layout Visualizer")

layout_label = QLabel("No Layouts Loaded")
layout_label.setFont(QFont("Andale Mono", 22))
layout_label.setWordWrap(True)

layout = QVBoxLayout()
layout.addWidget(layout_label)

button_layout = QHBoxLayout()

load_button = QPushButton("Load Layouts")
load_button.clicked.connect(load_layouts)
button_layout.addWidget(load_button)

prev_button = QPushButton("Previous")
prev_button.clicked.connect(prev_layout)
button_layout.addWidget(prev_button)

next_button = QPushButton("Next")
next_button.clicked.connect(next_layout)
button_layout.addWidget(next_button)

layout.addLayout(button_layout)
window.setLayout(layout)

# Automatically load the layouts when the program starts
load_layouts()

window.show()
sys.exit(app.exec_())