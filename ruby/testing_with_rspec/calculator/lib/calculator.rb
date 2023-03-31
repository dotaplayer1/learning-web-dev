class Calculator
  def add(a, *args)
    args.reduce(a) { |sum, value| sum += value }
  end

  def multiply(a, *args)
    args.reduce(a) { |product, value| product *= value }
  end

  def subtract(a, *args)
    args.reduce(a) { |diff, value| diff -= value }
  end

  def divide(a, *args)
    args.reduce(a) { |quotient, value| quotient /= value }
  end
end
