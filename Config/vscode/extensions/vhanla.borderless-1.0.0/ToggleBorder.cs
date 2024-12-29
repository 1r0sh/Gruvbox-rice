using System;
using System.Runtime.InteropServices;
using System.Diagnostics;
using System.Text;

public static class CBS {
	private const int GWL_STYLE 	= -16;
	private const int WS_CAPTION 	= 0x00C00000;
	private const int WS_THICKFRAME	= 0x00040000;
	private const int WS_MAXIMIZE = 0x01000000;
	private const int WS_BORDER = 0x00800000;

	private const int WM_NCLBUTTONDBLCLK = 0x00A3;
	private const int WM_SYSCOMMAND = 0x0112;
	private const int WM_GETTEXT = 0x000D;
	private const int WM_GETTEXTLENGTH = 0x000E;
	private const int SC_MAXIMIZE = 0xF030;
	private const int SC_RESTORE = 0xF120;
	private const int SC_MINIMIZE = 0xF020;

	private const int SWP_ASYNCWINDOWPOS = 0x4000;
	private const int SwP_DEFERERASE = 0x2000;
	private const int SWP_DRAWFRAME = 0x0020;
	private const int SWP_FRAMECHANGED = 0x0020;
	private const int SWP_HIDEWINDOW = 0x0080;
	private const int SWP_NOACTIVATE = 0x0010;
	private const int SWP_NOCOPYBITS = 0x0100;
	private const int SWP_NOMOVE = 0x0002;
	private const int SWP_NOOWNERZORDER = 0x0200;
	private const int SWP_NOREDRAW = 0x0008;
	private const int SWP_NOREPOSITION = 0x0200;
	private const int SWP_NOSENDCHANGING = 0x0400;
	private const int SWP_NOSIZE = 0x0001;
	private const int SWP_NOZORDER = 0x0004;
	private const int SWP_SHOWWINDOW = 0x004;

	private const byte BT_BORDERLESS = 0;
	private const byte BT_BORDERSIZABLE = 1;
	private const byte BT_BORDERSIMPLE = 2;

	private delegate bool EnumWindowsProc(int hWnd, int lParam);
	[DllImport("user32.dll")]
	private static extern bool EnumThreadWindows(uint dwThreadId, EnumWindowsProc lpEnumFunc, int lParam);
	[DllImport("user32.dll")]
	private static extern uint GetWindowThreadProcessId(int hWnd, out int lpdwProcessId);
	[DllImport("user32.dll")]
	private static extern bool IsWindowVisible(int hWnd);
	[DllImport("user32.dll")]
	private static extern int GetWindowLong(int hWnd, int nIndex);
	[DllImport("user32.dll")]
	private static extern int SetWindowLong(int hWnd, int nIndex, int dwNewLong);
	[DllImport("user32.dll")]
	private static extern bool UpdateWindow(int hWnd);
	[DllImport("user32.dll")]
	private static extern bool SetWindowPos(int hWnd, int hWndInserAfter, int x, int y, int cx, int cy, int uFlags);
	[DllImport("user32.dll")]
	private static extern int PostMessage(int hWnd, uint Msg, int wParam, int lParam);
	[DllImport("user32.dll")]
	private static extern bool SendMessage(int hWnd, uint Msg, int wParam, StringBuilder lParam);
	[DllImport("user32.dll")]
	private static extern int SendMessage(int hWnd, uint Msg, int wParam, int lParam);
	[DllImport("user32.dll")]
	private static extern int GetForegroundWindow();
	[DllImport("user32.dll")]
	private static extern bool SetForegroundWindow(int hWnd);

	public static bool ToggleBorder(int pid, byte state, byte borderType) {
		Process mainproc = Process.GetProcessById(pid);
		bool ignoreWnd;
		int activeWnd = GetForegroundWindow();
		foreach (Process proc in Process.GetProcessesByName(mainproc.ProcessName)) {
			if (proc.StartInfo.FileName == mainproc.StartInfo.FileName) {
				int hMainWnd = proc.MainWindowHandle.ToInt32();
				if (hMainWnd != 0) {
					uint tid = GetWindowThreadProcessId(hMainWnd, out pid);
					bool result = EnumThreadWindows(tid, delegate(int hWnd, int lParam) {
						if (IsWindowVisible(hWnd)) {
							ignoreWnd = false;
							int windowLong = GetWindowLong(hWnd, GWL_STYLE);
							StringBuilder title;
							int titleLen = SendMessage(hWnd, WM_GETTEXTLENGTH, 0, 0);
							if (titleLen > 0){
								title = new StringBuilder(titleLen + 1);
								SendMessage(hWnd, WM_GETTEXT, title.Capacity, title);
								if (title.ToString().IndexOf("Developer Tools -") == 0)
								{
									ignoreWnd = true;
								}
							}
							if (! ignoreWnd){
								if (state == 0){
									SetWindowLong(hWnd, GWL_STYLE, windowLong | WS_CAPTION | WS_THICKFRAME & ~WS_BORDER);
								}else{
									switch (borderType)
									{
										case BT_BORDERSIZABLE:
											SetWindowLong(hWnd, GWL_STYLE, windowLong & ~WS_CAPTION & ~WS_BORDER | WS_THICKFRAME);
											break;
										case BT_BORDERSIMPLE:
											SetWindowLong(hWnd, GWL_STYLE, windowLong & ~WS_CAPTION & ~WS_THICKFRAME | WS_BORDER);
											break;
										case BT_BORDERLESS:
										default:
											SetWindowLong(hWnd, GWL_STYLE, windowLong & ~WS_CAPTION & ~WS_THICKFRAME & ~WS_BORDER);
											break;
									}
								}
								UpdateWindow(hWnd);
								int swpFlags = SWP_FRAMECHANGED | SWP_NOMOVE | SWP_NOZORDER | SWP_NOSIZE | SWP_NOACTIVATE;
								SetWindowPos(hWnd, 0, 0, 0, 0, 0, swpFlags);
								if ((windowLong & WS_MAXIMIZE) == WS_MAXIMIZE)
								{
									PostMessage(hWnd, WM_SYSCOMMAND, SC_RESTORE, 0);
									PostMessage(hWnd, WM_SYSCOMMAND, SC_MAXIMIZE, 0);
								}
							}
						}
						return true;
					}, 0);
					if (!result) {
						return false;
					}
				}
			}
		}
		SetForegroundWindow(activeWnd);
		return true;
	}
}