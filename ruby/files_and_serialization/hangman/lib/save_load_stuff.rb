require 'yaml'

class SaveLoadStuff
  def save_file(word, guesses, letters_guessed, solved_letters)
    hash = {}
    hash[:word] = word
    hash[:guesses] = guesses
    hash[:letters_guessed] = letters_guessed
    hash[:solved_letters] = solved_letters
    file = File.open('save_files/save_file.yaml', 'w')
    file.write(YAML.dump(hash))
    file.close
    puts 'Game Saved'
    exit
  end

  def load_file
    file = File.open('save_files/save_file.yaml')
    hash = YAML.load(file)
    puts 'Game Loaded'
    hash
  end
end
