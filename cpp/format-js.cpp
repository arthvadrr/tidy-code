#include <iostream>
#include <regex>
#include <string>
using namespace std;

string formatJavaScript(const string& javascriptCode) {
    regex indentationRegex("(\\{|\\})");

    int indentationLevel = 0;
    string formattedCode;
    smatch matches;
    regex_search(javascriptCode, matches, indentationRegex);
    for (const auto& match : matches) {
        if (match.str() == "{") {
            formattedCode += string(indentationLevel * 4, ' ');
            formattedCode += "{\n";
            indentationLevel++;
        } else if (match.str() == "}") {
            indentationLevel--;
            formattedCode += string(indentationLevel * 4, ' ');
            formattedCode += "}\n";
        }
    }

    return formattedCode;
}

int main(int argc, char* argv[]) {
    if (argc != 2) {
        cout << "Usage: " << argv[0] << " <javascript code>" << endl;
        return 1;
    }

    string javascriptCode = argv[1];
    string formattedCode = formatJavaScript(javascriptCode);

    cout << "Formatted JavaScript code:" << endl;
    cout << formattedCode;

    return 0;
}
