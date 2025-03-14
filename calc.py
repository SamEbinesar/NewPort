import tkinter as tk
from tkinter import font

# Function to handle button clicks
def on_click(event):
    text = event.widget.cget("text")
    if text == "=":
        try:
            result = eval(str(entry_var.get()))
            entry_var.set(result)
        except Exception as e:
            entry_var.set("Error")
    elif text == "C":
        entry_var.set("")
    elif text == "AC":
        entry_var.set("")
    else:
        entry_var.set(entry_var.get() + text)

# Initialize main window
root = tk.Tk()
root.title("CALCULATOR")
root.geometry("350x450")
root.configure(bg="#282C34")

# Define custom font
button_font = font.Font(family="Arial", size=14, weight="bold")

# Entry widget for displaying calculations
entry_var = tk.StringVar()
entry = tk.Entry(root, textvar=entry_var, font=("Arial", 18), bd=8, relief="ridge", justify="right", bg="white", fg="black")
entry.pack(fill="both", ipadx=8, ipady=8, pady=10, padx=10)

# Define button styles
button_style = {
    "font": button_font,
    "bd": 5,
    "bg": "#4CAF50",  # Green color for buttons
    "fg": "white",
    "width": 5,
    "height": 2,
    "relief": "raised"
}

# Define special button styles
special_button_style = {
    "font": button_font,
    "bd": 5,
    "bg": "#F44336",  # Red color for AC and C
    "fg": "white",
    "width": 5,
    "height": 2,
    "relief": "raised"
}

# Layout buttons using a grid
button_texts = [
    ['0', '1', '2', '+'],
    ['3', '4', '5', '-'],
    ['6', '7', '8', '*'],
    ['9', '=', '/', 'C'],
    ['AC']
]

frame = tk.Frame(root, bg="#282C34")
frame.pack()

for i, row in enumerate(button_texts):
    for j, text in enumerate(row):
        if text in ["C", "AC"]:
            btn = tk.Button(frame, text=text, **special_button_style)
        else:
            btn = tk.Button(frame, text=text, **button_style)

        btn.grid(row=i, column=j, padx=5, pady=5)
        btn.bind("<Button-1>", on_click)

# Run the main event loop
root.mainloop()
