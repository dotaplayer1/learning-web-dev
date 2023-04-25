module Markers
  def yellow_marker
    "\e[33m\u25cf\e[0m"
  end

  def blue_marker
    "\e[34m\u25cf\e[0m"
  end

  def empty_tile
    "\u25cb"
  end
end
