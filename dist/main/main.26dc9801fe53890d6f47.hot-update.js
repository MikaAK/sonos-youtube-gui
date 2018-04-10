exports.id = "main";
exports.modules = {

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ \"./src/main/main.js\");\n\n\n\n\n\n\nconst isDevelopment = \"development\" !== 'production'; // global reference to mainWindow (necessary to prevent window from being garbage collected)\n\nlet mainWindow;\n\nconst createMainWindow = () => {\n  const window = new electron__WEBPACK_IMPORTED_MODULE_0__[\"BrowserWindow\"]();\n  Object(_main__WEBPACK_IMPORTED_MODULE_3__[\"main\"])(window);\n\n  if (isDevelopment) {\n    window.webContents.openDevTools();\n  }\n\n  if (isDevelopment) {\n    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);\n  } else {\n    window.loadURL(Object(url__WEBPACK_IMPORTED_MODULE_2__[\"format\"])({\n      pathname: path__WEBPACK_IMPORTED_MODULE_1__[\"join\"](__dirname, 'index.html'),\n      protocol: 'file',\n      slashes: true\n    }));\n  }\n\n  window.on('closed', () => {\n    mainWindow = null;\n  });\n  window.webContents.on('devtools-opened', () => {\n    window.focus();\n    setImmediate(() => {\n      window.focus();\n    });\n  });\n  return window;\n}; // quit application when all windows are closed\n\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\n  // on macOS it is common for applications to stay open until the user explicitly quits\n  if (process.platform !== 'darwin') {\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n  }\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\n  // on macOS it is common to re-create a window even after all windows have been closed\n  if (mainWindow === null) {\n    mainWindow = createMainWindow();\n  }\n}); // create main BrowserWindow when electron is ready\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', () => {\n  mainWindow = createMainWindow();\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"src/main\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9pbmRleC5qcz9lNTlhIl0sIm5hbWVzIjpbImlzRGV2ZWxvcG1lbnQiLCJtYWluV2luZG93IiwiY3JlYXRlTWFpbldpbmRvdyIsIndpbmRvdyIsIm1haW4iLCJ3ZWJDb250ZW50cyIsIm9wZW5EZXZUb29scyIsImxvYWRVUkwiLCJwcm9jZXNzIiwiZW52IiwiRUxFQ1RST05fV0VCUEFDS19XRFNfUE9SVCIsImZvcm1hdFVybCIsInBhdGhuYW1lIiwiX19kaXJuYW1lIiwicHJvdG9jb2wiLCJzbGFzaGVzIiwib24iLCJmb2N1cyIsInNldEltbWVkaWF0ZSIsImFwcCIsInBsYXRmb3JtIiwicXVpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsZ0JBQWdCLGtCQUF5QixZQUEvQyxDLENBRUE7O0FBQ0EsSUFBSUMsVUFBSjs7QUFFQSxNQUFNQyxtQkFBbUIsTUFBTTtBQUM3QixRQUFNQyxTQUFTLElBQUksc0RBQUosRUFBZjtBQUVBQyxFQUFBLGtEQUFBQSxDQUFLRCxNQUFMOztBQUVBLE1BQUlILGFBQUosRUFBbUI7QUFDakJHLFdBQU9FLFdBQVAsQ0FBbUJDLFlBQW5CO0FBQ0Q7O0FBRUQsTUFBSU4sYUFBSixFQUFtQjtBQUNqQkcsV0FBT0ksT0FBUCxDQUFnQixvQkFBbUJDLFFBQVFDLEdBQVIsQ0FBWUMseUJBQTBCLEVBQXpFO0FBQ0QsR0FGRCxNQUVPO0FBQ0xQLFdBQU9JLE9BQVAsQ0FBZSxrREFBQUksQ0FBVTtBQUN2QkMsZ0JBQVUsMENBQVVDLFNBQVYsRUFBcUIsWUFBckIsQ0FEYTtBQUV2QkMsZ0JBQVUsTUFGYTtBQUd2QkMsZUFBUztBQUhjLEtBQVYsQ0FBZjtBQUtEOztBQUVEWixTQUFPYSxFQUFQLENBQVUsUUFBVixFQUFvQixNQUFNO0FBQ3hCZixpQkFBYSxJQUFiO0FBQ0QsR0FGRDtBQUlBRSxTQUFPRSxXQUFQLENBQW1CVyxFQUFuQixDQUFzQixpQkFBdEIsRUFBeUMsTUFBTTtBQUM3Q2IsV0FBT2MsS0FBUDtBQUNBQyxpQkFBYSxNQUFNO0FBQ2pCZixhQUFPYyxLQUFQO0FBQ0QsS0FGRDtBQUdELEdBTEQ7QUFPQSxTQUFPZCxNQUFQO0FBQ0QsQ0EvQkQsQyxDQWlDQTs7O0FBQ0EsNENBQUFnQixDQUFJSCxFQUFKLENBQU8sbUJBQVAsRUFBNEIsTUFBTTtBQUNoQztBQUNBLE1BQUlSLFFBQVFZLFFBQVIsS0FBcUIsUUFBekIsRUFBbUM7QUFDakNELElBQUEsNENBQUFBLENBQUlFLElBQUo7QUFDRDtBQUNGLENBTEQ7QUFPQSw0Q0FBQUYsQ0FBSUgsRUFBSixDQUFPLFVBQVAsRUFBbUIsTUFBTTtBQUN2QjtBQUNBLE1BQUlmLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJBLGlCQUFhQyxrQkFBYjtBQUNEO0FBQ0YsQ0FMRCxFLENBT0E7O0FBQ0EsNENBQUFpQixDQUFJSCxFQUFKLENBQU8sT0FBUCxFQUFnQixNQUFNO0FBQ3BCZixlQUFhQyxrQkFBYjtBQUNELENBRkQsRSIsImZpbGUiOiIuL3NyYy9tYWluL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHAsIEJyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHtmb3JtYXQgYXMgZm9ybWF0VXJsfSBmcm9tICd1cmwnXG5cbmltcG9ydCB7bWFpbn0gZnJvbSAnLi9tYWluJ1xuXG5jb25zdCBpc0RldmVsb3BtZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuXG4vLyBnbG9iYWwgcmVmZXJlbmNlIHRvIG1haW5XaW5kb3cgKG5lY2Vzc2FyeSB0byBwcmV2ZW50IHdpbmRvdyBmcm9tIGJlaW5nIGdhcmJhZ2UgY29sbGVjdGVkKVxubGV0IG1haW5XaW5kb3dcblxuY29uc3QgY3JlYXRlTWFpbldpbmRvdyA9ICgpID0+IHtcbiAgY29uc3Qgd2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coKVxuXG4gIG1haW4od2luZG93KVxuXG4gIGlmIChpc0RldmVsb3BtZW50KSB7XG4gICAgd2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gIH1cblxuICBpZiAoaXNEZXZlbG9wbWVudCkge1xuICAgIHdpbmRvdy5sb2FkVVJMKGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuRUxFQ1RST05fV0VCUEFDS19XRFNfUE9SVH1gKVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2FkVVJMKGZvcm1hdFVybCh7XG4gICAgICBwYXRobmFtZTogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcbiAgICAgIHByb3RvY29sOiAnZmlsZScsXG4gICAgICBzbGFzaGVzOiB0cnVlXG4gICAgfSkpXG4gIH1cblxuICB3aW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbFxuICB9KVxuXG4gIHdpbmRvdy53ZWJDb250ZW50cy5vbignZGV2dG9vbHMtb3BlbmVkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5mb2N1cygpXG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mb2N1cygpXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gd2luZG93XG59XG5cbi8vIHF1aXQgYXBwbGljYXRpb24gd2hlbiBhbGwgd2luZG93cyBhcmUgY2xvc2VkXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICAvLyBvbiBtYWNPUyBpdCBpcyBjb21tb24gZm9yIGFwcGxpY2F0aW9ucyB0byBzdGF5IG9wZW4gdW50aWwgdGhlIHVzZXIgZXhwbGljaXRseSBxdWl0c1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpXG4gIH1cbn0pXG5cbmFwcC5vbignYWN0aXZhdGUnLCAoKSA9PiB7XG4gIC8vIG9uIG1hY09TIGl0IGlzIGNvbW1vbiB0byByZS1jcmVhdGUgYSB3aW5kb3cgZXZlbiBhZnRlciBhbGwgd2luZG93cyBoYXZlIGJlZW4gY2xvc2VkXG4gIGlmIChtYWluV2luZG93ID09PSBudWxsKSB7XG4gICAgbWFpbldpbmRvdyA9IGNyZWF0ZU1haW5XaW5kb3coKVxuICB9XG59KVxuXG4vLyBjcmVhdGUgbWFpbiBCcm93c2VyV2luZG93IHdoZW4gZWxlY3Ryb24gaXMgcmVhZHlcbmFwcC5vbigncmVhZHknLCAoKSA9PiB7XG4gIG1haW5XaW5kb3cgPSBjcmVhdGVNYWluV2luZG93KClcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/index.js\n");

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/operators.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ \"ramda\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sonos_youtube_helpers_sonos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sonos-youtube/helpers/sonos */ \"./node_modules/sonos-youtube/helpers/sonos/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ \"./src/main/helpers/index.js\");\n\n\n\n\n\n\n\nconst propArg = Object(ramda__WEBPACK_IMPORTED_MODULE_1__[\"prop\"])('arg');\nconst uniqByName = Object(ramda__WEBPACK_IMPORTED_MODULE_1__[\"uniqBy\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__[\"prop\"])('name'));\n\nconst getSpeakers$ = () => sonos_youtube_helpers_sonos__WEBPACK_IMPORTED_MODULE_2__[\"deviceList$\"].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(uniqByName));\n\nconst main = window => {\n  const sendWindowMessage = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"sendMessage\"])(window);\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_4__[\"ipcOn$\"])(_actions__WEBPACK_IMPORTED_MODULE_3__[\"REQUEST_SPEAKERS\"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__[\"tap\"])(a => console.log('request speakers', a)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__[\"mergeMap\"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__[\"compose\"])(getSpeakers$, propArg))).subscribe(sendWindowMessage(_actions__WEBPACK_IMPORTED_MODULE_3__[\"RECEIVE_SPEAKERS\"]));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9tYWluLmpzPzE1NjkiXSwibmFtZXMiOlsicHJvcEFyZyIsInByb3AiLCJ1bmlxQnlOYW1lIiwidW5pcUJ5IiwiZ2V0U3BlYWtlcnMkIiwiZGV2aWNlTGlzdCQiLCJwaXBlIiwicnhNYXAiLCJtYWluIiwid2luZG93Iiwic2VuZFdpbmRvd01lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsImlwY09uJCIsInRhcCIsImEiLCJjb25zb2xlIiwibG9nIiwibWVyZ2VNYXAiLCJjb21wb3NlIiwic3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQSxNQUFNQSxVQUFVLGtEQUFBQyxDQUFLLEtBQUwsQ0FBaEI7QUFDQSxNQUFNQyxhQUFhLG9EQUFBQyxDQUFPLGtEQUFBRixDQUFLLE1BQUwsQ0FBUCxDQUFuQjs7QUFFQSxNQUFNRyxlQUFlLE1BQU0sdUVBQUFDLENBQ3hCQyxJQUR3QixDQUNuQiwwREFBQUMsQ0FBTUwsVUFBTixDQURtQixDQUEzQjs7QUFHTyxNQUFNTSxPQUFRQyxNQUFELElBQVk7QUFDOUIsUUFBTUMsb0JBQW9CLDREQUFBQyxDQUFZRixNQUFaLENBQTFCO0FBRUFHLEVBQUEsdURBQUFBLENBQU8seURBQVAsRUFDR04sSUFESCxDQUVJLDBEQUFBTyxDQUFJQyxLQUFLQyxRQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0NGLENBQWhDLENBQVQsQ0FGSixFQUdJLCtEQUFBRyxDQUFTLHFEQUFBQyxDQUFRZCxZQUFSLEVBQXNCSixPQUF0QixDQUFULENBSEosRUFLR21CLFNBTEgsQ0FLYVQsa0JBQWtCLHlEQUFsQixDQUxiO0FBTUQsQ0FUTSIsImZpbGUiOiIuL3NyYy9tYWluL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lcmdlTWFwLCBtYXAgYXMgcnhNYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQge3Byb3AsIGNvbXBvc2UsIHVuaXFCeX0gZnJvbSAncmFtZGEnXG5pbXBvcnQge2RldmljZUxpc3QkfSBmcm9tICdzb25vcy15b3V0dWJlL2hlbHBlcnMvc29ub3MnXG5cbmltcG9ydCB7UkVDRUlWRV9TUEVBS0VSUywgUkVRVUVTVF9TUEVBS0VSU30gZnJvbSAnLi4vYWN0aW9ucydcblxuaW1wb3J0IHtpcGNPbiQsIHNlbmRNZXNzYWdlfSBmcm9tICcuL2hlbHBlcnMnXG5cbmNvbnN0IHByb3BBcmcgPSBwcm9wKCdhcmcnKVxuY29uc3QgdW5pcUJ5TmFtZSA9IHVuaXFCeShwcm9wKCduYW1lJykpXG5cbmNvbnN0IGdldFNwZWFrZXJzJCA9ICgpID0+IGRldmljZUxpc3QkXG4gIC5waXBlKHJ4TWFwKHVuaXFCeU5hbWUpKVxuXG5leHBvcnQgY29uc3QgbWFpbiA9ICh3aW5kb3cpID0+IHtcbiAgY29uc3Qgc2VuZFdpbmRvd01lc3NhZ2UgPSBzZW5kTWVzc2FnZSh3aW5kb3cpXG5cbiAgaXBjT24kKFJFUVVFU1RfU1BFQUtFUlMpXG4gICAgLnBpcGUoXG4gICAgICB0YXAoYSA9PiBjb25zb2xlLmxvZygncmVxdWVzdCBzcGVha2VycycsIGEpKSxcbiAgICAgIG1lcmdlTWFwKGNvbXBvc2UoZ2V0U3BlYWtlcnMkLCBwcm9wQXJnKSlcbiAgICApXG4gICAgLnN1YnNjcmliZShzZW5kV2luZG93TWVzc2FnZShSRUNFSVZFX1NQRUFLRVJTKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/main.js\n");

/***/ })

};