require "./lib/board.rb"
require "./lib/pieces.rb"

describe Board do
  subject(:board) { described_class.new }

  describe "#place_marker" do
    context "When a marker is placed" do
      it "places a yellow marker on row 6 column 3" do
        board.place_marker(5, 2, 1)
        expect(board.board).to eql([[0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 1, 0, 0, 0, 0]])
      end
    end

    context "When a marker is placed" do
      it "places a blue marker on row 2 column 7" do
        board.place_marker(1, 6, 2)
        expect(board.board).to eql([[0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 2],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0, 0, 0]])
      end
    end
  end
end