var gdjs;
(function (l) {
  const f = new l.Logger('PIXI game renderer'),
    h = GlobalPIXIModule.PIXI,
    m = [37, 38, 39, 40];
  class g {
    constructor(e, t) {
      this._isFullPage = !0;
      this._isFullscreen = !1;
      this._pixiRenderer = null;
      this._domElementsContainer = null;
      this._canvasWidth = 0;
      this._canvasHeight = 0;
      this._keepRatio = !0;
      this._nextFrameId = 0;
      this.getElectronRemote = () => {
        if (typeof require == 'function') {
          const e = this._game.getAdditionalOptions(),
            t =
              e && e.electronRemoteRequirePath
                ? e.electronRemoteRequirePath
                : '@electron/remote';
          try {
            return require(t);
          } catch (i) {
            console.error(
              `Could not load @electron/remote from "${t}". Error is:`,
              i,
            );
          }
        }
        return null;
      };
      (this._game = e),
        (this._forceFullscreen = t),
        (this._marginLeft =
          this._marginTop =
          this._marginRight =
          this._marginBottom =
            0),
        this._setupOrientation();
    }
    createStandardCanvas(e) {
      this._pixiRenderer = h.autoDetectRenderer({
        width: this._game.getGameResolutionWidth(),
        height: this._game.getGameResolutionHeight(),
        preserveDrawingBuffer: !0,
        antialias: !1,
      });
      const t = this._pixiRenderer.view;
      e.appendChild(t),
        (t.style.position = 'absolute'),
        (t.tabIndex = 1),
        (t.style.userSelect = 'none'),
        (t.style.outline = 'none');
      const i = document.createElement('div');
      (i.style.position = 'absolute'),
        (i.style.overflow = 'hidden'),
        (i.style.outline = 'none'),
        (i.style.pointerEvents = 'none'),
        i.addEventListener('scroll', (r) => {
          (i.scrollLeft = 0), (i.scrollTop = 0), r.preventDefault();
        }),
        (i.style['-webkit-user-select'] = 'none'),
        e.appendChild(i),
        (this._domElementsContainer = i),
        this._resizeCanvas(),
        this._game.getScaleMode() === 'nearest' &&
          ((this._pixiRenderer.view.style['image-rendering'] =
            '-moz-crisp-edges'),
          (this._pixiRenderer.view.style['image-rendering'] =
            '-webkit-optimize-contrast'),
          (this._pixiRenderer.view.style['image-rendering'] =
            '-webkit-crisp-edges'),
          (this._pixiRenderer.view.style['image-rendering'] = 'pixelated')),
        this._game.getPixelsRounding() && (h.settings.ROUND_PIXELS = !0),
        window.addEventListener('resize', () => {
          this._game.onWindowInnerSizeChanged(), this._resizeCanvas();
        });
    }
    static getWindowInnerWidth() {
      return typeof window != 'undefined' ? window.innerWidth : 800;
    }
    static getWindowInnerHeight() {
      return typeof window != 'undefined' ? window.innerHeight : 800;
    }
    updateRendererSize() {
      this._resizeCanvas();
    }
    _setupOrientation() {
      if (
        typeof window == 'undefined' ||
        !window.screen ||
        !window.screen.orientation
      )
        return;
      const e = this._game.getGameData().properties.orientation;
      try {
        if (e === 'default') {
          const t = window.screen.orientation.unlock();
          t && t.catch(() => {});
        } else window.screen.orientation.lock(e).catch(() => {});
      } catch (t) {
        f.error('Unexpected error while setting up orientation: ', t);
      }
    }
    _resizeCanvas() {
      if (!this._pixiRenderer || !this._domElementsContainer) return;
      (this._pixiRenderer.width !== this._game.getGameResolutionWidth() ||
        this._pixiRenderer.height !== this._game.getGameResolutionHeight()) &&
        this._pixiRenderer.resize(
          this._game.getGameResolutionWidth(),
          this._game.getGameResolutionHeight(),
        );
      const e = this._forceFullscreen || this._isFullPage || this._isFullscreen;
      let t = this._game.getGameResolutionWidth(),
        i = this._game.getGameResolutionHeight(),
        r = window.innerWidth - this._marginLeft - this._marginRight,
        s = window.innerHeight - this._marginTop - this._marginBottom;
      if ((r < 0 && (r = 0), s < 0 && (s = 0), e && !this._keepRatio))
        (t = r), (i = s);
      else if ((e && this._keepRatio) || t > r || i > s) {
        let u = r / t;
        i * u > s && (u = s / i), (t *= u), (i *= u);
      }
      (this._pixiRenderer.view.style.top =
        this._marginTop + (s - i) / 2 + 'px'),
        (this._pixiRenderer.view.style.left =
          this._marginLeft + (r - t) / 2 + 'px'),
        (this._pixiRenderer.view.style.width = t + 'px'),
        (this._pixiRenderer.view.style.height = i + 'px'),
        (this._domElementsContainer.style.top =
          this._marginTop + (s - i) / 2 + 'px'),
        (this._domElementsContainer.style.left =
          this._marginLeft + (r - t) / 2 + 'px'),
        (this._domElementsContainer.style.width = t + 'px'),
        (this._domElementsContainer.style.height = i + 'px'),
        (this._canvasWidth = t),
        (this._canvasHeight = i);
    }
    keepAspectRatio(e) {
      this._keepRatio !== e && ((this._keepRatio = e), this._resizeCanvas());
    }
    setMargins(e, t, i, r) {
      (this._marginTop === e &&
        this._marginRight === t &&
        this._marginBottom === i &&
        this._marginLeft === r) ||
        ((this._marginTop = e),
        (this._marginRight = t),
        (this._marginBottom = i),
        (this._marginLeft = r),
        this._resizeCanvas());
    }
    setWindowSize(e, t) {
      const i = this.getElectronRemote();
      if (i) {
        const r = i.getCurrentWindow();
        r && r.setContentSize(e, t);
      } else f.warn("Window size can't be changed on this platform.");
    }
    centerWindow() {
      const e = this.getElectronRemote();
      if (e) {
        const t = e.getCurrentWindow();
        t && t.center();
      }
    }
    setFullScreen(e) {
      if (!this._forceFullscreen && this._isFullscreen !== e) {
        this._isFullscreen = !!e;
        const t = this.getElectronRemote();
        if (t) {
          const i = t.getCurrentWindow();
          i && i.setFullScreen(this._isFullscreen);
        } else
          this._isFullscreen
            ? document.documentElement.requestFullscreen
              ? document.documentElement.requestFullscreen()
              : document.documentElement.mozRequestFullScreen
              ? document.documentElement.mozRequestFullScreen()
              : document.documentElement.webkitRequestFullScreen &&
                document.documentElement.webkitRequestFullScreen()
            : document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen &&
              document.webkitCancelFullScreen();
        this._resizeCanvas();
      }
    }
    isFullScreen() {
      const e = this.getElectronRemote();
      return e
        ? e.getCurrentWindow().isFullScreen()
        : this._isFullscreen || window.screen.height === window.innerHeight;
    }
    convertCanvasToDomElementContainerCoords(e) {
      const t = [e[0], e[1]];
      return (
        (t[0] /=
          this._game.getGameResolutionWidth() / (this._canvasWidth || 1)),
        (t[1] /=
          this._game.getGameResolutionHeight() / (this._canvasHeight || 1)),
        t
      );
    }
    getCanvasToDomElementContainerHeightScale() {
      return (this._canvasHeight || 1) / this._game.getGameResolutionHeight();
    }
    bindStandardEvents(e, t, i) {
      const r = this._pixiRenderer;
      if (!r) return;
      const s = r.view,
        u = this;
      function c(n) {
        const o = [n.pageX - s.offsetLeft, n.pageY - s.offsetTop];
        return (
          (o[0] *= u._game.getGameResolutionWidth() / (u._canvasWidth || 1)),
          (o[1] *= u._game.getGameResolutionHeight() / (u._canvasHeight || 1)),
          o
        );
      }
      function p(n) {
        const o = n.pageX - s.offsetLeft,
          a = n.pageY - s.offsetTop;
        return (
          0 <= o &&
          o < (u._canvasWidth || 1) &&
          0 <= a &&
          a < (u._canvasHeight || 1)
        );
      }
      (function () {
        isNaN(s.offsetLeft) && ((s.offsetLeft = 0), (s.offsetTop = 0)),
          isNaN(i.body.scrollLeft) &&
            ((i.body.scrollLeft = 0), (i.body.scrollTop = 0)),
          (i.documentElement === void 0 || i.documentElement === null) &&
            (i.documentElement = {}),
          isNaN(i.documentElement.scrollLeft) &&
            ((i.documentElement.scrollLeft = 0),
            (i.documentElement.scrollTop = 0)),
          isNaN(s.offsetLeft) && ((s.offsetLeft = 0), (s.offsetTop = 0));
      })();
      const d = () =>
        !(
          i.activeElement === s ||
          i.activeElement === i.body ||
          i.activeElement === null
        );
      (i.onkeydown = function (n) {
        d() ||
          (m.includes(n.keyCode) && n.preventDefault(),
          e.onKeyPressed(n.keyCode, n.location));
      }),
        (i.onkeyup = function (n) {
          d() ||
            (m.includes(n.keyCode) && n.preventDefault(),
            e.onKeyReleased(n.keyCode, n.location));
        }),
        (s.onmousemove = function (n) {
          const o = c(n);
          e.onMouseMove(o[0], o[1]);
        }),
        (s.onmousedown = function (n) {
          return e.onMouseButtonPressed(
            n.button === 2
              ? l.InputManager.MOUSE_RIGHT_BUTTON
              : n.button === 1
              ? l.InputManager.MOUSE_MIDDLE_BUTTON
              : l.InputManager.MOUSE_LEFT_BUTTON,
          );
        }),
        (s.onmouseup = function (n) {
          return (
            e.onMouseButtonReleased(
              n.button === 2
                ? l.InputManager.MOUSE_RIGHT_BUTTON
                : n.button === 1
                ? l.InputManager.MOUSE_MIDDLE_BUTTON
                : l.InputManager.MOUSE_LEFT_BUTTON,
            ),
            !1
          );
        }),
        (s.onmouseleave = function (n) {
          e.onMouseLeave();
        }),
        (s.onmouseenter = function (n) {
          e.onMouseEnter();
          {
            const o = (n.buttons & 1) != 0,
              a = e.isMouseButtonPressed(l.InputManager.MOUSE_LEFT_BUTTON);
            o && !a && e.onMouseButtonPressed(l.InputManager.MOUSE_LEFT_BUTTON),
              !o &&
                a &&
                e.onMouseButtonReleased(l.InputManager.MOUSE_LEFT_BUTTON);
          }
          {
            const o = (n.buttons & 2) != 0,
              a = e.isMouseButtonPressed(l.InputManager.MOUSE_RIGHT_BUTTON);
            o &&
              !a &&
              e.onMouseButtonPressed(l.InputManager.MOUSE_RIGHT_BUTTON),
              !o &&
                a &&
                e.onMouseButtonReleased(l.InputManager.MOUSE_RIGHT_BUTTON);
          }
          {
            const o = (n.buttons & 4) != 0,
              a = e.isMouseButtonPressed(l.InputManager.MOUSE_MIDDLE_BUTTON);
            o &&
              !a &&
              e.onMouseButtonPressed(l.InputManager.MOUSE_MIDDLE_BUTTON),
              !o &&
                a &&
                e.onMouseButtonReleased(l.InputManager.MOUSE_MIDDLE_BUTTON);
          }
        }),
        t.addEventListener(
          'click',
          function (n) {
            return n.preventDefault(), !1;
          },
          !1,
        ),
        (s.oncontextmenu = function (n) {
          return n.preventDefault(), n.stopPropagation(), !1;
        }),
        (s.onwheel = function (n) {
          e.onMouseWheel(-n.deltaY);
        }),
        t.addEventListener('touchmove', function (n) {
          if (!d() && (n.preventDefault(), n.changedTouches))
            for (let o = 0; o < n.changedTouches.length; ++o) {
              const a = c(n.changedTouches[o]);
              e.onTouchMove(n.changedTouches[o].identifier, a[0], a[1]),
                e.isSimulatingMouseWithTouch() &&
                  (p(n.changedTouches[o])
                    ? e.onMouseEnter()
                    : e.onMouseLeave());
            }
        }),
        t.addEventListener('touchstart', function (n) {
          if (!d()) {
            if ((n.preventDefault(), n.changedTouches))
              for (let o = 0; o < n.changedTouches.length; ++o) {
                const a = c(n.changedTouches[o]);
                e.onTouchStart(n.changedTouches[o].identifier, a[0], a[1]);
              }
            return !1;
          }
        }),
        t.addEventListener('touchend', function (n) {
          if (!d()) {
            if ((n.preventDefault(), n.changedTouches))
              for (let o = 0; o < n.changedTouches.length; ++o) {
                const a = c(n.changedTouches[o]);
                e.onTouchEnd(n.changedTouches[o].identifier);
              }
            return !1;
          }
        });
    }
    setWindowTitle(e) {
      typeof document != 'undefined' && (document.title = e);
    }
    getWindowTitle() {
      return typeof document != 'undefined' ? document.title : '';
    }
    startGameLoop(e) {
      let t = 0;
      const i = (r) => {
        this._nextFrameId = requestAnimationFrame(i);
        const s = t ? r - t : 0;
        (t = r), e(s) || cancelAnimationFrame(this._nextFrameId);
      };
      requestAnimationFrame(i);
    }
    getPIXIRenderer() {
      return this._pixiRenderer;
    }
    getDomElementContainer() {
      return this._domElementsContainer;
    }
    openURL(e) {
      if (typeof window != 'undefined') {
        const t = this.getElectron();
        if (t) t.shell.openExternal(e);
        else {
          const i = window.cordova ? '_system' : '_blank';
          window.open(e, i);
        }
      }
    }
    stopGame() {
      const e = this.getElectronRemote();
      if (e) {
        const t = e.getCurrentWindow();
        t && t.close();
      } else
        typeof navigator != 'undefined' &&
          navigator.app &&
          navigator.app.exitApp &&
          navigator.app.exitApp();
    }
    getCanvas() {
      return this._pixiRenderer.view;
    }
    isWebGLSupported() {
      return (
        !!this._pixiRenderer &&
        this._pixiRenderer.type === h.RENDERER_TYPE.WEBGL
      );
    }
    getElectron() {
      return typeof require == 'function' ? require('electron') : null;
    }
  }
  (l.RuntimeGamePixiRenderer = g), (l.RuntimeGameRenderer = g);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map
