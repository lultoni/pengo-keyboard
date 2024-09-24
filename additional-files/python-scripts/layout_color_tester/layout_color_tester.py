import sys
from PyQt5 import QtWidgets, QtGui
from PyQt5.QtWidgets import QColorDialog, QLabel, QLineEdit, QComboBox

class ColorPickerWidget(QtWidgets.QWidget):
    def __init__(self, label, color, callback, initial_color=None):
        super().__init__()
        self.color_code = None
        self.color_display = None
        self.color_button = None
        self.color = color
        self.callback = callback
        self.initUI(label)
        if initial_color:
            self.update_color(initial_color)

    def initUI(self, label):
        layout = QtWidgets.QHBoxLayout()

        # Button to change color
        self.color_button = QtWidgets.QPushButton(label, self)
        self.color_button.clicked.connect(self.change_color)

        # Color window
        self.color_display = QLabel(self)
        self.color_display.setFixedSize(30, 30)
        self.color_display.setStyleSheet(f"background-color: {self.color.name()}")

        # Hex code or description
        self.color_code = QLineEdit(self)
        self.color_code.setText(self.color.name())
        self.color_code.setReadOnly(True)

        layout.addWidget(self.color_button, 1)
        layout.addWidget(self.color_display, 1)
        layout.addWidget(self.color_code, 1)

        self.setLayout(layout)

    def change_color(self):
        color = QColorDialog.getColor()
        if color.isValid():
            self.update_color(color)

    def update_color(self, color):
        self.color = color
        self.color_display.setStyleSheet(f"background-color: {self.color.name()}")
        self.color_code.setText(self.color.name())
        self.callback(self.color)


class KeyboardWidget(QtWidgets.QWidget):
    def __init__(self):
        super().__init__()
        self.case_color = QtGui.QColor(66, 66, 66)  # dark grey (matte look)
        self.outer_keys_color = QtGui.QColor(90, 90, 90)  # medium dark grey
        self.non_outer_keys_color = QtGui.QColor(48, 48, 48)  # grey (matte look, lightly differentiated)
        self.raise_layer_color = QtGui.QColor(255, 165, 0)  # nice looking orange
        self.lower_layer_color = QtGui.QColor(173, 216, 230)  # light blue (nice looking)
        self.initUI()

    def initUI(self):
        self.setMinimumSize(700, 400)

    def paintEvent(self, event):
        qp = QtGui.QPainter()
        qp.begin(self)
        self.drawKeyboard(qp)
        qp.end()

    def drawKeyboard(self, qp):
        spacing = 10  # constant space between keys
        key_size = 40  # width and height of each key
        x_offset = -40  # shift keys to the left by 40 units

        # Define your keyboard point locations
        points = [
            # Coordinates for left hand columns
            [(60 + x_offset, 120), (60 + x_offset, 170)],  # Outer
            [(110 + x_offset, 120), (110 + x_offset, 170), (110 + x_offset, 220)],  # Pinky (not outer)
            [(160 + x_offset, 100), (160 + x_offset, 150), (160 + x_offset, 200)],  # Ring (20 higher than pinky)
            [(210 + x_offset, 90), (210 + x_offset, 140), (210 + x_offset, 190)],  # Middle (10 higher than ring)
            [(260 + x_offset, 110), (260 + x_offset, 160), (260 + x_offset, 210)],  # Index (20 lower than middle)
            [(310 + x_offset, 110), (310 + x_offset, 160), (310 + x_offset, 210)],  # Inner
            # Coordinates for right hand columns
            [(400 + x_offset, 110), (400 + x_offset, 160), (400 + x_offset, 210)],  # Inner
            [(450 + x_offset, 110), (450 + x_offset, 160), (450 + x_offset, 210)],  # Index
            [(500 + x_offset, 90), (500 + x_offset, 140), (500 + x_offset, 190)],  # Middle
            [(550 + x_offset, 100), (550 + x_offset, 150), (550 + x_offset, 200)],  # Ring
            [(600 + x_offset, 120), (600 + x_offset, 170), (600 + x_offset, 220)],  # Pinky (not outer)
            [(650 + x_offset, 120), (650 + x_offset, 170)],  # Outer
        ]

        thumb_fan_left = [
            (220 + x_offset, 260), (270 + x_offset, 270), (320 + x_offset, 280)  # Coordinates for left thumbfan
        ]

        thumb_fan_right = [
            (490 + x_offset, 260), (440 + x_offset, 270), (390 + x_offset, 280)  # Coordinates for right thumbfan
        ]

        all_keys = points + [thumb_fan_left, thumb_fan_right]
        all_key_positions = [pos for sublist in all_keys for pos in sublist]

        # Calculate the bounding box
        min_x = min(x for x, y in all_key_positions)
        max_x = max(x for x, y in all_key_positions)
        min_y = min(y for x, y in all_key_positions)
        max_y = max(y for x, y in all_key_positions)

        # Draw the case/plate rectangle dynamically around the keys
        case_padding = 20
        qp.setBrush(self.case_color)
        qp.drawRect(min_x - case_padding, min_y - case_padding,
                    (max_x - min_x) + key_size + 2 * case_padding,
                    (max_y - min_y) + key_size + 2 * case_padding)

        # Draw main keys with their corresponding colors
        for idx, cols in enumerate(points):
            for x, y in cols:
                if idx in [0, 11]:  # Only the first and last columns are outer keys
                    color = self.outer_keys_color
                else:
                    color = self.non_outer_keys_color
                qp.setBrush(color)
                qp.drawRect(x, y, key_size, key_size)

        # Draw thumbfan keys
        for idx, (x, y) in enumerate(thumb_fan_left):
            color = self.raise_layer_color if idx == 1 else self.outer_keys_color
            qp.setBrush(color)
            qp.drawRect(x, y, key_size, key_size)

        for idx, (x, y) in enumerate(thumb_fan_right):
            color = self.lower_layer_color if idx == 1 else self.outer_keys_color
            qp.setBrush(color)
            qp.drawRect(x, y, key_size, key_size)


class KeyboardApp(QtWidgets.QWidget):
    def __init__(self):
        super().__init__()
        self.color_pickers = None
        self.loadout_combo = None
        self.color_controls = None
        self.keyboard_widget = None
        self.initUI()

    def initUI(self):
        self.keyboard_widget = KeyboardWidget()

        layout = QtWidgets.QVBoxLayout()
        layout.addWidget(self.keyboard_widget)

        self.color_controls = {
            'case': ('Case Color', self.keyboard_widget.case_color, self.set_case_color),
            'inner': ('Inner Keys Color', self.keyboard_widget.non_outer_keys_color, self.set_non_outer_keys_color),
            'outer': ('Outer Keys Color', self.keyboard_widget.outer_keys_color, self.set_outer_keys_color),
            'raise': ('Raise Layer Key Color', self.keyboard_widget.raise_layer_color, self.set_raise_layer_color),
            'lower': ('Lower Layer Key Color', self.keyboard_widget.lower_layer_color, self.set_lower_layer_color),
        }

        color_layout = QtWidgets.QVBoxLayout()
        self.color_pickers = {}

        for key, (label, color, func) in self.color_controls.items():
            picker = ColorPickerWidget(label, color, func)
            self.color_pickers[key] = picker
            color_layout.addWidget(picker)

        color_group = QtWidgets.QGroupBox('Color Controls')
        color_group.setLayout(color_layout)

        loadout_label = QLabel("Load Color Loadout")
        self.loadout_combo = QComboBox(self)
        self.loadout_combo.addItem("Default", {
            'case': '#424242',
            'outer': '#5a5a5a',
            'inner': '#303030',
            'raise': '#edaf21',
            'lower': '#ADD8E6'
        })
        self.loadout_combo.addItem("Black and Yellow", {
            'case': '#5e5e5e',
            'outer': '#e8ca87',
            'inner': '#707070',
            'raise': '#e8ca87',
            'lower': '#e8ca87'
        })
        self.loadout_combo.addItem("Light Retro", {
            'case': '#f9f1df',
            'outer': '#8f8f8f',
            'inner': '#efe9d8',
            'raise': '#ffdf96',
            'lower': '#ffdf96'
        })
        self.loadout_combo.addItem("Black Red-Orange", {
            'case': '#2c3230',
            'outer': '#2a2e2f',
            'inner': '#5a5a58',
            'raise': '#d27556',
            'lower': '#d27556'
        })
        self.loadout_combo.addItem("Light Pumpkin", {
            'case': '#424242',
            'outer': '#5a5a5a',
            'inner': '#f2e8d9',
            'raise': '#ffb443',
            'lower': '#ffb443'
        })
        self.loadout_combo.addItem("Khaki", {
            'case': '#7e6253',
            'outer': '#91a492',
            'inner': '#dbc89c',
            'raise': '#d28c63',
            'lower': '#d28c63'
        })
        self.loadout_combo.currentIndexChanged.connect(self.load_loadout)
        loadout_layout = QtWidgets.QHBoxLayout()
        loadout_layout.addWidget(loadout_label)
        loadout_layout.addWidget(self.loadout_combo)

        layout.addLayout(loadout_layout)  # Add the loadout menu above color controls
        layout.addWidget(color_group)
        self.setLayout(layout)
        self.setWindowTitle('Keyboard Color Tester')
        self.setGeometry(200, 200, 700, 600)

    def load_loadout(self):
        loadout = self.loadout_combo.currentData()

        if loadout:
            colors = {
                'case': self.set_case_color,
                'outer': self.set_outer_keys_color,
                'inner': self.set_non_outer_keys_color,
                'raise': self.set_raise_layer_color,
                'lower': self.set_lower_layer_color,
            }

            for key, color in loadout.items():
                qcolor = QtGui.QColor(color)
                picker = self.color_pickers[key]
                picker.update_color(qcolor)
                colors[key](qcolor)

    def set_case_color(self, color):
        self.keyboard_widget.case_color = color
        self.keyboard_widget.update()

    def set_outer_keys_color(self, color):
        self.keyboard_widget.outer_keys_color = color
        self.keyboard_widget.update()

    def set_non_outer_keys_color(self, color):
        self.keyboard_widget.non_outer_keys_color = color
        self.keyboard_widget.update()

    def set_raise_layer_color(self, color):
        self.keyboard_widget.raise_layer_color = color
        self.keyboard_widget.update()

    def set_lower_layer_color(self, color):
        self.keyboard_widget.lower_layer_color = color
        self.keyboard_widget.update()


def main():
    app = QtWidgets.QApplication(sys.argv)
    ex = KeyboardApp()
    ex.show()
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()