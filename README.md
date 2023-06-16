# 🦆 Ducky - AI Rubber Duck Debugging

Ducky is a web browser-based debugger tool that incorporates the concept of rubber duck debugging, helping developers identify and solve code issues by explaining their code out loud to a virtual rubber duck. This repository contains the code and assets required to create the Ducky debugger tool. With Ducky, you can get assistance in understanding and debugging your code snippets in an interactive and engaging manner.

## Features

### 1. Code Snippet Tooltip 🐤
When using Google Chrome, Ducky provides a unique feature where a tooltip appears with an icon of a duck whenever a code snippet is selected.

### 2. Opening Code in a New Tab 🌐
By clicking on the duck icon in the tooltip, a new tab will open with the code snippet.

### 3. Code Explanation Webpage 📝
The new page opened will present an intuitive interface designed to enhance code understanding and debugging.

- A beautiful code editor, similar to carbon.now.sh, is positioned in the center. It includes line numbers and supports various programming languages.
- On the left side of the editor, a friendly rubber duck appears. It will traverse the code line by line or block by block, assisting in code explanation.
- At the bottom of the page, a chat-like box allows the user to type in text explaining the code snippet the duck is pointing to.
- In the top-right corner, a toggle option is available to switch to voice mode. When enabled, users can speak out the explanation instead of typing. The chat box will be replaced by a microphone icon with animated waves, indicating that the duck is listening for the user's voice input. The detected text will be displayed over the wave animation, similar to Google Assistant on phones.

### 4. Controls for Explanation Playback ⏯️
Once the explanation is complete, a top bar will appear, providing controls for playback and customization:

- Pause: ⏸️ Pauses the explanation playback.
- Next: ⏭️ Skips to the next line or block in the code for further explanation.
- Previous: ⏮️ Moves back to the previous line or block for reviewing the explanation.
- Speed Control: ⚡ Allows users to adjust the speed at which the duck narrates the explanation.

### 5. Explanation Playback and Highlighting 🔍
The duck will go through the code line by line or block by block, highlighting the corresponding text and providing explanations based on either the user-provided text or audio recordings associated with that specific line.

### 6. Session Management and Export 💾
At any time during the debugging session, users can stop the session. Ducky provides options for exporting the explanation in two formats:

- Export as Comments: 🗒️ The explanation will be exported as comments embedded within the code.
- Export as MP3: 🎧 The explanation will be exported as an MP3 audio file.

## Future Features 🚀

Ducky aims to continuously improve and introduce new features to enhance the debugging experience. Here are some planned future features:

### 1. Magic Wand Auto-Explanation ✨
A button with a magic wand icon will be available, enabling Ducky to automatically analyze and generate explanations for code snippets using advanced AI models like GPT-3. Users won't need to provide text or audio explanations manually.

### 2. Code Analysis Feedback 😢
On the loading page of the debugger, Ducky will prompt the user to provide a brief description of the code snippet. The AI analysis will then determine if the code is suitable for the user's intended purpose. If the code is deemed unsuitable, Ducky will display an animation of a weeping duck accompanied by cute crying sounds to express the code's

 inadequacy.

## Getting Started 🚀

To use Ducky, follow these steps:

1. Clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions

`.
3. Enable Developer mode using the toggle switch on the top right corner.
4. Click on "Load unpacked" and select the cloned repository folder.
5. The Ducky extension should now be installed in Chrome.
6. Select a code snippet on any web page to trigger the Ducky tooltip and begin the debugging session.

## Contributing 🤝

Contributions to Ducky are welcome! If you have ideas for improvements or would like to contribute code, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch from the `main` branch.
3. Make your desired changes and enhancements.
4. Test your changes to ensure they work correctly.
5. Commit and push your changes to your forked repository.
6. Submit a pull request to the `main` branch of the original repository, explaining your changes and their benefits.

## License 📄

Ducky is licensed under the [MIT License](LICENSE). Feel free to modify and distribute this project, but remember to include attribution and the original license in your derivative work.

## Acknowledgements 🙏

Ducky was inspired by the concept of rubber duck debugging and aims to provide an interactive and engaging debugging experience. We would like to thank the open-source community for their valuable contributions and the developers behind the tools and libraries used in this project.

Ducky logo created by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com).
