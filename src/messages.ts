export default {
    admin: "Run VS Code with admin privileges so the changes can be applied.",
	enabled:
		"Sakura glow enabled. Restart to take effect. " +
		"If Code complains about it is corrupted, CLICK DON'T SHOW AGAIN. " +
		"See README for more detail.",
	disabled: "Sakura glow disabled and reverted to default. Restart to take effect.",
	already_disabled: "Sakura glow already disabled.",
	somethingWrong: "Something went wrong: ",
	restartIde: "Restart Visual Studio Code",
	notfound: "Sakura glow not found.",
	notConfigured:
		"Sakura glow path not configured. " +
		'Please set "sakura.imports" in your user settings.',
	reloadAfterVersionUpgrade:
		"Detected reloading CSS / JS after VSCode is upgraded. " + "Performing application only.",
	cannotLoad: (url: string) => `Cannot load '${url}'. Skipping.`
}
