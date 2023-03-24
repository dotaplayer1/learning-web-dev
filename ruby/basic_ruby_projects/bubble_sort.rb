def bubble_sort(arr)
  for i in 0..arr.length - 1
    for j in 0..arr.length - i - 2
      if arr[j] > arr[j + 1]
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
      end
    end
  end
  arr
end

puts bubble_sort([4,3,78,2,0,2])
puts bubble_sort([4,3,78,2,0,2]) == [0,2,2,3,4,78]