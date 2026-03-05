firstNumber = 0
secondNumber = 1
thirdNumber = 0
i = 0
lista = []

def contains(lst, filter):
    for x in lst:
        if filter(x):
            return True
    return False

output = ""

if choice == 1:
    while i != n:
        output += str(firstNumber) + "\n"
        thirdNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = thirdNumber
        i += 1

elif choice == 2:
    while i != 100:
        lista.append(firstNumber)
        thirdNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = thirdNumber
        i += 1

    if contains(lista, lambda x: x == checkNumber):
        output = "Yes it contains " + str(checkNumber)
    else:
        output = "Nah, it doesn't contain " + str(checkNumber)

output