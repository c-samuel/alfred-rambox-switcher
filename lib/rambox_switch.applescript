on run argv
	if (count of argv) > 0 then
		set idx to argv as text
	else
		set idx to 1
	end if
	
	tell application "Alfred 3"
		activate
	end tell
	
	tell application "Rambox"
		activate
		tell application "System Events" to tell process "Rambox" to keystroke idx using {command down}
	end tell
end run
