def hansu(num):
    count = 0
    for i in range(1, num+1):
        if i<100:
            count += 1
        else:
            num_list = list(map(int, str(i)))
            if num_list[1]-num_list[0] == num_list[2]-num_list[1]:
                count += 1
    return count

if __name__ == "__main__":
    n = int(input())
print(hansu(n))
