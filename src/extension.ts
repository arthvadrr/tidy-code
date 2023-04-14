import * as vscode from 'vscode';
import defaultPreferences from './defaultPreferences';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "tidy-code" is now active!');

	let disposable = vscode.commands.registerCommand('tidy-code.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World jf tidy-code!');
		
	});

	const formatCode = () => {
		console.log('hi');
	};

	const formatCodeCommand = vscode.commands.registerCommand('tidy-code.formatCode', formatCode);
	
	context.subscriptions.push(formatCodeCommand);
}

export function deactivate() {}