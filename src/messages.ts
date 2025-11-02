export default {
    admin: "Run VS Code with admin privileges so the changes can be applied.",
	enabled:
		"Sakura bloom enabled. Restart to take effect. " +
		"If Code complains about it is corrupted, CLICK DON'T SHOW AGAIN. " +
		"See README for more detail.",
	disabled: "Sakura bloom disabled and reverted to default. Restart to take effect.",
	already_disabled: "Sakura bloom already disabled.",
	somethingWrong: "Something went wrong: ",
	restartIde: "Restart Visual Studio Code",
	notfound: "Sakura bloom not found.",
	notConfigured:
		"Sakura bloom path not configured. " +
		'Please set "sakura-chan-theme.imports" in your user settings.',
	reloadAfterVersionUpgrade:
		"Detected reloading CSS / JS after VSCode is upgraded. " + "Performing application only.",
	cannotLoad: (url: string) => `Cannot load '${url}'. Skipping.`
}
