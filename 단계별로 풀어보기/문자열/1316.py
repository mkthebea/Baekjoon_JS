n = int(input())
count = 0

for i in range(n):
    a = list(input())
    j = 1
    for _ in range(1, len(a)):
        if a[j - 1] == a[j]:
            del a[j]
            j -= 1
        j += 1
            
    b = set(a)
    if len(b) == len(a):
        count+=1

print(count)