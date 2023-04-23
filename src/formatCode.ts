import * as vscode from 'vscode';
import defaultPreferences from './defaultPreferences';

type TextEditor = vscode.TextEditor;
type TextEditorEdit = vscode.TextEditorEdit;

const {
    formatOnOpen
} = defaultPreferences;

let isFirstRun = true;

export async function formatCode() {
    type Path = string;

    if (
        (isFirstRun && formatOnOpen) ||
        !isFirstRun
    ) {
        const activeTextEditor: TextEditor | undefined = vscode.window.activeTextEditor;

        if (activeTextEditor) {
            type TextDocument = vscode.TextDocument;

            const activeDocument: TextDocument = activeTextEditor.document;
            const activeText: string = activeTextEditor.document.getText();
            const edit = new vscode.WorkspaceEdit();
            const languageId = activeDocument.languageId;

            const formattedText = activeText + 'HELLO1';

            edit.replace(
                activeDocument.uri,
                new vscode.Range(0, 0, activeDocument.lineCount, 0),
                formattedText
            );

            vscode.window.showInformationMessage('buckle up buckaroos');
        }
    }

    if (isFirstRun) {
        isFirstRun = false;
    }

    return null;
};

export default formatCode;