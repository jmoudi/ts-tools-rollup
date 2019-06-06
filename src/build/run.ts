function execute(configFile: string, configs: InputOptions[], command: any) {
	if (command.watch) {
		watch(configFile, configs, command, command.silent);
	} else {
		let promise = Promise.resolve();
		for (const config of configs) {
			promise = promise.then(() => {
				const warnings = batchWarnings();
				const { inputOptions, outputOptions, optionError } = mergeOptions({
					command,
					config,
					defaultOnWarnHandler: warnings.add
				});

				if (optionError) inputOptions.onwarn({ code: 'UNKNOWN_OPTION', message: optionError });
				return build(inputOptions, outputOptions, warnings, command.silent);
			});
		}
		return promise;
	}
}