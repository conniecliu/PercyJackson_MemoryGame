# rows = 5;

# for x in range (1, rows + 1):
#     for y in range(1, x + 1, 1):
#         print(y, end = ' ')

#     print("")


# num = (int)(input("Enter number: "))
# sum = 0;

# for x in range(1, num + 1, 1):
#     sum += x;


# print(sum)


# sum2 = 0;

# list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# for i in range(0, len(list), 1):
#     sum2 += list[i];

# print(sum2)


# numbers = [12, 75, 150, 180, 145, 525, 50]

# for i in range (0, len(numbers), 1):

#     if (numbers[i] > 500):
#         break
#     elif numbers[i] > 150:
#         continue
#     elif numbers[i] % 5 == 0:
#         print(numbers[i])

rows = 5;

for i in range(5, 0, -1):
    for j in range(i, 0, -1):
        print(j, end= ' ')
    
    print("")