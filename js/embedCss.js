function embedCSS() {

    var css =  '.igv-navbar {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  color: #444;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  line-height: 32px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin-top: 2px;\n  margin-bottom: 6px;\n  height: 32px;\n  border-style: solid;\n  border-radius: 3px;\n  border-width: thin;\n  border-color: #bfbfbf;\n  background-color: #f3f3f3; }\n.igv-navbar .igv-navbar-left-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 32px;\n  line-height: 32px; }\n.igv-navbar .igv-navbar-left-container .igv-logo {\n  width: 34px;\n  height: 32px;\n  margin-right: 8px; }\n.igv-navbar .igv-navbar-left-container .igv-current-genome {\n  height: 32px;\n  margin-left: 4px;\n  margin-right: 4px;\n  user-select: none;\n  line-height: 32px;\n  vertical-align: middle;\n  text-align: center; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-chromosome-select-widget-container {\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 125px;\n  margin-right: 4px; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-chromosome-select-widget-container select {\n  display: block;\n  cursor: pointer;\n  width: 100px;\n  height: 75%;\n  outline: none;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 8px;\n  height: 22px; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-search-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 210px;\n  height: 22px;\n  line-height: 22px; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-search-container input.igv-search-input {\n  cursor: text;\n  width: 85%;\n  height: 22px;\n  line-height: 22px;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  text-align: left;\n  padding-left: 8px;\n  margin-right: 8px;\n  outline: none;\n  border-style: solid;\n  border-radius: 3px;\n  border-width: thin;\n  border-color: #bfbfbf;\n  background-color: white; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-search-container .igv-search-icon-container {\n  cursor: pointer;\n  height: 16px;\n  width: 16px; }\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-windowsize-panel-container {\n  margin-left: 4px;\n  user-select: none; }\n.igv-navbar .igv-navbar-right-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 32px;\n  line-height: 32px; }\n.igv-navbar .igv-navbar-right-container .igv-navbar-toggle-button-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%; }\n.igv-navbar .igv-navbar-right-container .igv-navbar-toggle-button-container div {\n  margin-left: 0;\n  margin-right: 4px; }\n.igv-navbar .igv-navbar-right-container .igv-navbar-toggle-button-container div:last-child {\n  margin-left: 0;\n  margin-right: 0; }\n.igv-navbar .igv-navbar-right-container .igv-navbar-toggle-button-container-750 {\n  display: none; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget {\n  color: #737373;\n  font-size: 18px;\n  height: 32px;\n  line-height: 32px;\n  margin-left: 8px;\n  user-select: none;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div {\n  cursor: pointer;\n  margin-left: unset;\n  margin-right: unset; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div:first-child {\n  height: 24px;\n  width: 24px;\n  margin-left: unset;\n  margin-right: 8px; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div:last-child {\n  height: 24px;\n  width: 24px;\n  margin-left: 8px;\n  margin-right: unset; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div:nth-child(even) {\n  display: block;\n  height: fit-content; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget input {\n  display: block;\n  width: 125px; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget svg {\n  display: block; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 {\n  color: #737373;\n  font-size: 18px;\n  height: 32px;\n  line-height: 32px;\n  margin-left: 8px;\n  user-select: none;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div {\n  cursor: pointer;\n  margin-left: unset;\n  margin-right: unset; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div:first-child {\n  height: 24px;\n  width: 24px;\n  margin-left: unset;\n  margin-right: 8px; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div:last-child {\n  height: 24px;\n  width: 24px;\n  margin-left: 8px;\n  margin-right: unset; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div:nth-child(even) {\n  width: 0;\n  height: 0;\n  display: none; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 input {\n  width: 0;\n  height: 0;\n  display: none; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 svg {\n  display: block; }\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-hidden {\n  display: none; }\n\n.igv-navbar-button {\n  display: block;\n  box-sizing: unset;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 18px;\n  text-transform: capitalize;\n  user-select: none;\n  line-height: 18px;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 11px;\n  font-weight: 200;\n  color: #737373;\n  background-color: #f3f3f3;\n  border-color: #737373;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 6px; }\n\n.igv-navbar-button-clicked {\n  color: white;\n  background-color: #737373; }\n\n.igv-navbar-button:hover {\n  cursor: pointer; }\n\n.igv-zoom-in-notice-container {\n  z-index: 1024;\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  background-color: white; }\n.igv-zoom-in-notice-container > div {\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  width: 100%;\n  height: 100%;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #3f3f3f; }\n\n.igv-zoom-in-notice {\n  position: absolute;\n  top: 10px;\n  left: 50%; }\n.igv-zoom-in-notice div {\n  position: relative;\n  left: -50%;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  color: #3f3f3f;\n  background-color: rgba(255, 255, 255, 0.51);\n  z-index: 64; }\n\n.igv-container-spinner {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1024;\n  width: 24px;\n  height: 24px;\n  pointer-events: none;\n  color: #737373; }\n\n.igv-multi-locus-close-button {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 14px;\n  height: 14px;\n  color: #666666;\n  z-index: 1000; }\n.igv-multi-locus-close-button > svg {\n  vertical-align: top; }\n\n.igv-multi-locus-close-button:hover {\n  cursor: pointer;\n  color: #434343; }\n\n.igv-multi-locus-ruler-label {\n  z-index: 64;\n  position: absolute;\n  top: 2px;\n  left: 0;\n  width: 100%;\n  height: 14px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center; }\n.igv-multi-locus-ruler-label div {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #101010;\n  background-color: white; }\n\n.igv-multi-locus-ruler-label-square-dot {\n  z-index: 64;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  transform: translate(-50%, 0%);\n  background-color: white;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n.igv-multi-locus-ruler-label-square-dot > div:first-child {\n  width: 14px;\n  height: 14px; }\n.igv-multi-locus-ruler-label-square-dot > div:last-child {\n  margin-left: 16px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #101010; }\n\n.igv-multi-locus-ruler-label:hover {\n  cursor: pointer; }\n\n.igv-ruler-sweeper {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  z-index: 99999;\n  background-color: rgba(68, 134, 247, 0.25); }\n\n.igv-ruler-tooltip {\n  pointer-events: none;\n  z-index: 128;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 32px;\n  background-color: transparent;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n.igv-ruler-tooltip > div {\n  pointer-events: none;\n  width: 128px;\n  height: auto;\n  padding: 1px;\n  color: #373737;\n  font-size: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  background-color: white;\n  border-style: solid;\n  border-width: thin;\n  border-color: #373737; }\n\n.igv-track-label {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  width: auto;\n  height: auto;\n  max-width: 200px;\n  padding-left: 4px;\n  padding-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: small;\n  font-weight: 400;\n  text-align: center;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  border-color: #444;\n  border-radius: 2px;\n  border-style: solid;\n  border-width: thin;\n  background-color: white;\n  z-index: 128;\n  cursor: pointer; }\n\n.igv-track-label:hover,\n.igv-track-label:focus,\n.igv-track-label:active {\n  background-color: #e8e8e8; }\n\n.igv-center-line {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 8;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  border-left-style: dashed;\n  border-left-width: thin;\n  border-right-style: dashed;\n  border-right-width: thin; }\n\n.igv-center-line-wide {\n  background-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(127, 127, 127, 0.51);\n  border-right-color: rgba(127, 127, 127, 0.51); }\n\n.igv-center-line-thin {\n  background-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(127, 127, 127, 0.51);\n  border-right-color: rgba(0, 0, 0, 0); }\n\n.igv-cursor-guide-horizontal {\n  display: none;\n  pointer-events: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 1px;\n  z-index: 1;\n  margin-left: 50px;\n  margin-right: 54px;\n  border-top-style: dotted;\n  border-top-width: thin;\n  border-top-color: rgba(127, 127, 127, 0.76); }\n\n.igv-cursor-guide-vertical {\n  pointer-events: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n  z-index: 1;\n  border-left-style: dotted;\n  border-left-width: thin;\n  border-left-color: rgba(127, 127, 127, 0.76);\n  display: none; }\n\n.igv-user-feedback {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 512px;\n  height: 360px;\n  z-index: 2048;\n  background-color: white;\n  border-color: #a2a2a2;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n.igv-user-feedback div:first-child {\n  position: relative;\n  height: 24px;\n  width: 100%;\n  background-color: white;\n  border-bottom-color: #a2a2a2;\n  border-bottom-style: solid;\n  border-bottom-width: thin; }\n.igv-user-feedback div:first-child div {\n  position: absolute;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  background-color: transparent; }\n.igv-user-feedback div:first-child div:first-child {\n  left: 8px; }\n.igv-user-feedback div:first-child div:last-child {\n  cursor: pointer;\n  right: 8px; }\n.igv-user-feedback div:last-child {\n  width: 100%;\n  height: calc(100% - 24px);\n  border-width: 0; }\n.igv-user-feedback div:last-child div {\n  width: auto;\n  height: auto;\n  margin: 8px; }\n\n.igv-generic-dialog-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 200px;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  z-index: 2048;\n  background-color: white;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n.igv-generic-dialog-container .igv-generic-dialog-header {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 24px;\n  cursor: move;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-color: #7F7F7F;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  background-color: #eee; }\n.igv-generic-dialog-container .igv-generic-dialog-header div {\n  margin-right: 4px;\n  margin-bottom: 2px;\n  height: 12px;\n  width: 12px;\n  color: #7F7F7F; }\n.igv-generic-dialog-container .igv-generic-dialog-header div:hover {\n  cursor: pointer;\n  color: #444; }\n.igv-generic-dialog-container .igv-generic-dialog-one-liner {\n  color: #373737;\n  width: 95%;\n  height: 24px;\n  line-height: 24px;\n  text-align: left;\n  margin-top: 8px;\n  padding-left: 8px;\n  overflow-wrap: break-word;\n  background-color: white; }\n.igv-generic-dialog-container .igv-generic-dialog-label-input {\n  margin-top: 8px;\n  width: 95%;\n  height: 24px;\n  color: #373737;\n  line-height: 24px;\n  padding-left: 8px;\n  background-color: white;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n.igv-generic-dialog-container .igv-generic-dialog-label-input div {\n  width: 30%;\n  height: 100%;\n  font-size: 16px;\n  text-align: right;\n  padding-right: 8px;\n  background-color: white; }\n.igv-generic-dialog-container .igv-generic-dialog-label-input input {\n  display: block;\n  height: 100%;\n  width: 100%;\n  padding-left: 4px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  color: #373737;\n  text-align: left;\n  outline: none;\n  border-style: solid;\n  border-width: thin;\n  border-color: #7F7F7F;\n  background-color: white; }\n.igv-generic-dialog-container .igv-generic-dialog-label-input input {\n  width: 50%;\n  font-size: 16px; }\n.igv-generic-dialog-container .igv-generic-dialog-input {\n  margin-top: 8px;\n  width: calc(100% - 16px);\n  height: 24px;\n  color: #373737;\n  line-height: 24px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center; }\n.igv-generic-dialog-container .igv-generic-dialog-input input {\n  display: block;\n  height: 100%;\n  width: 100%;\n  padding-left: 4px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  color: #373737;\n  text-align: left;\n  outline: none;\n  border-style: solid;\n  border-width: thin;\n  border-color: #7F7F7F;\n  background-color: white; }\n.igv-generic-dialog-container .igv-generic-dialog-input input {\n  font-size: 16px; }\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel {\n  width: 100%;\n  height: 28px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center; }\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div {\n  margin-top: 32px;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  width: 75px;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  border-color: transparent;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 2px; }\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:first-child {\n  margin-left: 32px;\n  margin-right: 0;\n  background-color: #5ea4e0; }\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:last-child {\n  margin-left: 0;\n  margin-right: 32px;\n  background-color: #c4c4c4; }\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:first-child:hover {\n  cursor: pointer;\n  background-color: #3b5c7f; }\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:last-child:hover {\n  cursor: pointer;\n  background-color: #7f7f7f; }\n.igv-generic-dialog-container .igv-generic-dialog-ok {\n  width: 100%;\n  height: 36px;\n  margin-top: 32px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center; }\n.igv-generic-dialog-container .igv-generic-dialog-ok div {\n  width: 98px;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  border-color: white;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 4px;\n  background-color: #2B81AF; }\n.igv-generic-dialog-container .igv-generic-dialog-ok div:hover {\n  cursor: pointer;\n  background-color: #25597f; }\n\n.igv-generic-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2048;\n  background-color: white;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center; }\n.igv-generic-container div:first-child {\n  cursor: move;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  width: 100%;\n  background-color: #dddddd; }\n.igv-generic-container div:first-child i {\n  display: block;\n  color: #5f5f5f;\n  cursor: pointer;\n  width: 14px;\n  height: 14px;\n  margin-right: 8px;\n  margin-bottom: 4px; }\n\n.igv-menu-popup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 132px;\n  z-index: 4096;\n  cursor: pointer;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: small;\n  font-weight: 400;\n  color: #4b4b4b;\n  background: white;\n  border-radius: 4px;\n  border-color: #7F7F7F;\n  border-style: solid;\n  border-width: thin;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-end;\n  text-align: left; }\n.igv-menu-popup > div:not(:first-child) {\n  width: 100%; }\n.igv-menu-popup > div:not(:first-child) > div {\n  background: white; }\n.igv-menu-popup > div:not(:first-child) > div.context-menu {\n  padding-left: 4px;\n  padding-right: 4px; }\n.igv-menu-popup > div:not(:first-child) > div:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-color: transparent;\n  border-bottom-style: solid;\n  border-bottom-width: thin; }\n.igv-menu-popup > div:not(:first-child) > div:hover {\n  background: #efefef; }\n\n.igv-menu-popup-shim {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.igv-menu-popup-header {\n  position: relative;\n  width: 100%;\n  height: 24px;\n  cursor: move;\n  border-top-color: transparent;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-color: #7F7F7F;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  background-color: #eee;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center; }\n.igv-menu-popup-header div {\n  margin-right: 4px;\n  height: 12px;\n  width: 12px;\n  color: #7F7F7F; }\n.igv-menu-popup-header div:hover {\n  cursor: pointer;\n  color: #444; }\n\n.igv-menu-popup-check-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n  background-color: transparent; }\n.igv-menu-popup-check-container div {\n  padding-top: 2px;\n  padding-left: 8px; }\n.igv-menu-popup-check-container div:first-child {\n  position: relative;\n  width: 12px;\n  height: 12px; }\n.igv-menu-popup-check-container div:first-child svg {\n  position: absolute;\n  width: 12px;\n  height: 12px; }\n\n.igv-user-feedback {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 512px;\n  height: 360px;\n  z-index: 2048;\n  background-color: white;\n  border-color: #a2a2a2;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n.igv-user-feedback div:first-child {\n  position: relative;\n  height: 24px;\n  width: 100%;\n  background-color: white;\n  border-bottom-color: #a2a2a2;\n  border-bottom-style: solid;\n  border-bottom-width: thin; }\n.igv-user-feedback div:first-child div {\n  position: absolute;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  background-color: transparent; }\n.igv-user-feedback div:first-child div:first-child {\n  left: 8px; }\n.igv-user-feedback div:first-child div:last-child {\n  cursor: pointer;\n  right: 8px; }\n.igv-user-feedback div:last-child {\n  width: 100%;\n  height: calc(100% - 24px);\n  border-width: 0; }\n.igv-user-feedback div:last-child div {\n  width: auto;\n  height: auto;\n  margin: 8px; }\n\n.igv-loading-spinner-container {\n  z-index: 1024;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 32px;\n  height: 32px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center; }\n.igv-loading-spinner-container > div {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 4px solid rgba(128, 128, 128, 0.5);\n  border-top-color: white;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite; }\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n.igv-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 4px;\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n\n.igv-viewport {\n  position: relative;\n  margin-top: 5px;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.igv-viewport-content {\n  position: relative;\n  width: 100%; }\n.igv-viewport-content > canvas {\n  position: relative;\n  display: block; }\n\n.igv-column-container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 100%; }\n\n.igv-column-shim {\n  width: 1px;\n  margin-left: 2px;\n  margin-right: 2px;\n  background-color: #545453; }\n\n.igv-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%; }\n\n.igv-axis-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 50px; }\n.igv-axis-column > div {\n  margin-top: 5px;\n  width: 100%; }\n\n.igv-sample-name-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%; }\n\n.igv-scrollbar-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 14px; }\n.igv-scrollbar-column > div {\n  position: relative;\n  margin-top: 5px;\n  width: 14px; }\n.igv-scrollbar-column > div > div {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 2px;\n  width: 8px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #c4c4c4;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n.igv-scrollbar-column > div > div:hover {\n  background-color: #c4c4c4; }\n\n.igv-track-drag-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 12px;\n  background-color: white; }\n.igv-track-drag-column > .igv-track-drag-handle {\n  z-index: 512;\n  position: relative;\n  cursor: pointer;\n  margin-top: 5px;\n  width: 100%;\n  border-style: solid;\n  border-width: 0;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  background-color: #c4c4c4; }\n.igv-track-drag-column .igv-track-drag-handle-hover {\n  background-color: #787878; }\n.igv-track-drag-column > .igv-track-drag-shim {\n  position: relative;\n  margin-top: 5px;\n  width: 100%;\n  border-style: solid;\n  border-width: 0; }\n\n.igv-gear-menu-column {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 28px; }\n.igv-gear-menu-column > div {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 5px;\n  width: 100%;\n  background: white; }\n.igv-gear-menu-column > div > div {\n  position: relative;\n  margin-top: 4px;\n  width: 16px;\n  height: 16px;\n  color: #7F7F7F; }\n.igv-gear-menu-column > div > div:hover {\n  cursor: pointer;\n  color: #444; }\n\n/*# sourceMappingURL=dom.css.map */\n';

    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;

    document.head.insertBefore(style, document.head.childNodes[ document.head.childNodes.length - 1 ]);

}

export default embedCSS
