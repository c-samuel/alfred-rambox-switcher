tell application "Alfred 3"
	activate
end tell

tell application "Rambox"
	activate
	tell application "System Events" to tell process "Rambox" to keystroke idx using {command down}
end tell
