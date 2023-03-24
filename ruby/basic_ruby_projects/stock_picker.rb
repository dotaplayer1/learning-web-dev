def stock_picker(stock_prices)
  len = stock_prices.length
  best_days = [len - 1, len]
  max_profit = stock_prices[len - 1] - stock_prices[len - 2]
  stock_prices.to_enum.with_index.reverse_each do |sell_day, index|
    for i in (0..index).reverse_each do
      if sell_day - stock_prices[i] > max_profit && sell_day != stock_prices[i]
        best_days[0] = i
        best_days[1] = index
      end
    end
  end
  best_days
end

puts stock_picker([17,3,6,9,15,8,6,1,10])
puts stock_picker([17,3,6,9,15,8,6,1,10]) == [1, 4]