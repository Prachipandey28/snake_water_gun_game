import random

# 1 = Snake
# -1 = Water
# 0 = Gun

youDict = {"s": 1, "w": -1, "g": 0}
reverseDict = {1: "Snake", -1: "Water", 0: "Gun"}

computer = random.choice([1, -1, 0])

youstr = input("Enter your choice (s/w/g): ").lower()

if youstr not in youDict:
    print("❌ Invalid choice! Enter s, w, or g.")
    exit()

you = youDict[youstr]

print(f"\nYou chose: {reverseDict[you]}")
print(f"Computer chose: {reverseDict[computer]}")

if computer == you:
    print("🤝 It's a draw!")

elif (
    (you == 1 and computer == -1) or
    (you == -1 and computer == 0) or
    (you == 0 and computer == 1)
):
    print("🎉 You win!")

else:
    print("😢 You lose!")