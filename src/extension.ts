import {
	commands, 
	workspace, 
	ExtensionContext
} from 'vscode';

import formatCode from './formatCode';

// to store preferences maybe? https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.globalState

//Safe saving! 
// look into texteditor
// https://code.visualstudio.com/api/references/vscode-api#TextEditor
//https://code.visualstudio.com/api/references/vscode-api#workspace
export async function activate(context: ExtensionContext) {

	formatCode();

	const formatCodeCommand = commands.registerCommand('tidy-code.formatCode', formatCode);
	const formatOnWillSaveEvent = workspace.onWillSaveTextDocument(formatCode as any);
	const formatOnDidOpenTextDocument = workspace.onDidOpenTextDocument(formatCode as any);

	context.subscriptions.push(formatCodeCommand);
	context.subscriptions.push(formatOnDidOpenTextDocument);
	context.subscriptions.push(formatOnWillSaveEvent);
}

export function deactivate() {}