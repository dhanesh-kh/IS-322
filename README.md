# SmartCalcShop Calculator

A modern, iOS-style calculator app built with React Native and Expo.

## Features

- Clean, iOS-inspired user interface
- Basic arithmetic operations (+, -, ×, ÷)
- Special functions (±, %, Clear)
- Responsive design for various screen sizes
- Cross-platform compatibility (iOS and Android)

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **State Management**: React Hooks
- **UI Components**: Native components

## How It Works

### Calculation Process

The calculator follows a simple yet effective data flow:

1. **Input Capture**:
   - Numbers are stored as strings in the UI state
   - First operand is saved when an operator is pressed

2. **Calculation Process**:
   ```
   String → Number → Operation → Number → String
   "53"   → 53     → +        → 125    → "125"
   ```

3. **Why String → Number → String?**
   - **Strings for UI**: Better for display and input handling
   - **Numbers for Calculation**: Required for accurate arithmetic
   - **Back to Strings**: For display and consistent state management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SmartCalcShop.git
   cd SmartCalcShop
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Open the app:
   - Use Expo Go on your physical device by scanning the QR code
   - Press 'i' to open in iOS simulator (requires Xcode)
   - Press 'a' to open in Android emulator (requires Android Studio)

## Future Enhancements

- Scientific calculator mode
- Calculation history
- Themes and customization options
- Unit conversions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the iOS calculator design
- Built with React Native and Expo
