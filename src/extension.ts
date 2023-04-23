import {
	commands,
	workspace,
	ExtensionContext,
	Range,
	Position
} from 'vscode';

import * as vscode from 'vscode';
import formatCode from './formatCode';

type TextDocument = vscode.TextDocument;
type TextEdit = vscode.TextEdit;

// to store preferences maybe? https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.globalState

//Safe saving! 
// look into texteditor
// https://code.visualstudio.com/api/references/vscode-api#TextEditor
//https://code.visualstudio.com/api/references/vscode-api#workspace
export async function activate(context: ExtensionContext) {
	const formatCodeCommand = commands.registerCommand('tidy-code.formatCode', formatCode);
	const formatOnDidOpenTextDocument = workspace.onDidOpenTextDocument(formatCode);

	formatCode();

	context.subscriptions.push(formatCodeCommand);
	context.subscriptions.push(formatOnDidOpenTextDocument);

	vscode.languages.registerDocumentFormattingEditProvider('javascript', {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			const text = document.getText();
			const firstLine = document.lineAt(0);
			const firstPos: Position = document.positionAt(0);
			const endPos: Position = document.positionAt(text.length);
			const documentRange = new Range(firstPos, endPos); 

			const test = text + 'hi';

			if (text) {
				return [vscode.TextEdit.replace(documentRange, test)]; 
			}

			return [];
		}
	});
}

export function deactivate() { }