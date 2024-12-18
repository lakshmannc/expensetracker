import os
import csv
import json
import datetime
from forex_python.converter import CurrencyRates
import speech_recognition as sr
from PIL import Image
import pytesseract

# 1. Simple Expense Tracker
class ExpenseTracker:
    def _init_(self):
        self.expenses = []

    def add_expense(self, description, amount):
        self.expenses.append({"Description": description, "Amount": amount})
        print(f"Added expense: {description} - ${amount:.2f}")

    def view_expenses(self):
        print("\nYour Expenses:")
        for expense in self.expenses:
            print(f"{expense['Description']:<20} ${expense['Amount']:.2f}")

    def save_to_csv(self, filename="expenses.csv"):
        with open(filename, mode="w", newline="") as file:
            writer = csv.DictWriter(file, fieldnames=["Description", "Amount"])
            writer.writeheader()
            writer.writerows(self.expenses)
        print(f"Data saved to {filename}")

    def load_from_csv(self, filename="expenses.csv"):
        if os.path.exists(filename):
            with open(filename, mode="r") as file:
                reader = csv.DictReader(file)
                self.expenses = [row for row in reader]
            print(f"Data loaded from {filename}")
        else:
            print(f"{filename} not found. Starting with empty data.")

# 2. Categorized Expense Tracker
class CategorizedExpenseTracker(ExpenseTracker):
    def _init_(self):
        super()._init_()
        self.categories = {}

    def add_expense(self, description, amount, category):
        super().add_expense(description, amount)
        if category not in self.categories:
            self.categories[category] = 0
        self.categories[category] += amount
        print(f"Added to {category}: {description} - ${amount:.2f}")

    def view_expenses_by_category(self):
        print("\nExpenses by Category:")
        for category, total in self.categories.items():
            print(f"{category}: ${total:.2f}")

# 3. Recurring Expense Tracker
class RecurringExpenseTracker(ExpenseTracker):
    def _init_(self):
        super()._init_()
        self.recurring_expenses = {}

    def add_recurring_expense(self, description, amount, frequency):
        self.recurring_expenses[description] = {"Amount": amount, "Frequency": frequency}
        print(f"Recurring expense added: {description} - ${amount:.2f} every {frequency}")

    def view_recurring_expenses(self):
        print("\nRecurring Expenses:")
        for description, details in self.recurring_expenses.items():
            print(f"{description}: ${details['Amount']:.2f} every {details['Frequency']}")

# 4. Voice-Activated Expense Tracker
class VoiceExpenseTracker(ExpenseTracker):
    def _init_(self):
        super()._init_()

    def add_expense_by_voice(self):
        recognizer = sr.Recognizer()
        with sr.Microphone() as source:
            print("Please say the expense description and amount...")
            audio = recognizer.listen(source)
            try:
                text = recognizer.recognize_google(audio)
                description, amount = text.split(' for ')
                amount = float(amount.strip('$'))
                self.add_expense(description, amount)
            except Exception as e:
                print("Sorry, could not understand the speech. Try again.")

# 5. Receipt Scanner (OCR)
class ReceiptScanner:
    def _init_(self):
        pass

    def extract_text_from_image(self, image_path):
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image)
        print(f"Extracted Text: {text}")
        return text

# 6. Multi-Currency Expense Tracker
class MultiCurrencyExpenseTracker(ExpenseTracker):
    def _init_(self):
        super()._init_()
        self.c = CurrencyRates()

    def add_expense_in_currency(self, description, amount, currency, base_currency="USD"):
        converted_amount = self.c.convert(currency, base_currency, amount)
        super().add_expense(description, converted_amount)
        print(f"Converted {amount} {currency} to {converted_amount:.2f} {base_currency}")

# 7. Child-Friendly Expense Tracker (with Points)
class ChildFriendlyExpenseTracker(ExpenseTracker):
    def _init_(self):
        super()._init_()
        self.points = 0

    def add_expense_with_points(self, description, amount):
        super().add_expense(description, amount)
        self.points += 10  # Reward for adding an expense
        print(f"Added expense and earned 10 points! Total Points: {self.points}")

    def redeem_points(self):
        if self.points >= 50:
            self.points -= 50
            print("Redeemed 50 points for a reward!")
        else:
            print("Not enough points to redeem a reward.")

# 8. File Storage: CSV & JSON (already included in ExpenseTracker)

# 9. Group Expense Tracker (Splitting among multiple people)
class GroupExpenseTracker:
    def _init_(self):
        self.group_expenses = {}

    def add_group_expense(self, description, amount, members):
        share = amount / len(members)
        for member in members:
            if member not in self.group_expenses:
                self.group_expenses[member] = 0
            self.group_expenses[member] += share
        print(f"Expense added: {description} - ${amount:.2f}. Each member owes: ${share:.2f}")

    def view_group_expenses(self):
        print("\nGroup Expenses:")
        for member, total in self.group_expenses.items():
            print(f"{member}: ${total:.2f}")

# 10. User Interface (CLI for interacting with the user)
def main():
    tracker = ExpenseTracker()
    tracker.add_expense("Lunch", 25)
    tracker.add_expense("Taxi", 15)
    tracker.view_expenses()

    categorized_tracker = CategorizedExpenseTracker()
    categorized_tracker.add_expense("Lunch", 25, "Food")
    categorized_tracker.add_expense("Bus", 10, "Transport")
    categorized_tracker.view_expenses_by_category()

    recurring_tracker = RecurringExpenseTracker()
    recurring_tracker.add_recurring_expense("Netflix Subscription", 15, "Monthly")
    recurring_tracker.view_recurring_expenses()

    voice_tracker = VoiceExpenseTracker()
    voice_tracker.add_expense_by_voice()

    scanner = ReceiptScanner()
    scanner.extract_text_from_image("receipt_sample.png")

    multi_currency_tracker = MultiCurrencyExpenseTracker()
    multi_currency_tracker.add_expense_in_currency("Dinner", 50, "EUR")

    child_friendly_tracker = ChildFriendlyExpenseTracker()
    child_friendly_tracker.add_expense_with_points("Toy", 20)
    child_friendly_tracker.redeem_points()

    group_tracker = GroupExpenseTracker()
    group_tracker.add_group_expense("Dinner", 100, ["Alice", "Bob", "Charlie"])
    group_tracker.view_group_expenses()

if __name__ == "__main__":
    main()