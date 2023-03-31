require "./caesar_cipher.rb"

describe CaesarCipher do
  describe "#encrypt" do
    it "Encodes user input correctly" do
      caesar_cipher = CaesarCipher.new
      expect(caesar_cipher.encode("hello world", 5)).to eql("mjqqt btwqi")
    end

    it "Works with non-alphabet characters" do
      caesar_cipher = CaesarCipher.new
      expect(caesar_cipher.encode("h1ello! wo&@rld?", 5)).to eql("m1jqqt! bt&@wqi?")
    end

    it "Works with a cipher bigger than 26" do
      caesar_cipher = CaesarCipher.new
      expect(caesar_cipher.encode("hello world", 31)).to eql("mjqqt btwqi")
    end

    it "Works with a capital letters" do
      caesar_cipher = CaesarCipher.new
      expect(caesar_cipher.encode("HELLO WORLD", 31)).to eql("MJQQT BTWQI")
    end

    it "Works with negative numbers" do
      caesar_cipher = CaesarCipher.new
      expect(caesar_cipher.encode("mjqqt btwqi", -5)).to eql("hello world")
    end
  end
end