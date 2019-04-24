import { TextInputDefaultProps, TextInputProps } from '@bluebase/components';
import MUITextInput from '@material-ui/core/TextField';
import { componentMapper } from '@bluebase/component-mapper';

export const TextInput = componentMapper<TextInputProps>(
	MUITextInput,
	{
		autoCorrect: ({ autoCorrect }: TextInputProps) => (autoCorrect ? 'on' : 'off'),
		spellCheck: ({ spellCheck, autoCorrect }: TextInputProps) =>
			spellCheck !== undefined ? spellCheck : autoCorrect,

		disabled: ({ disabled, editable }: TextInputProps) =>
			disabled !== undefined ? disabled : !editable,

		onChange: ({ onChange, onChangeText }: TextInputProps) => (event: any) => {
			if (onChange) {
				onChange(event);
			}
			if (onChangeText && event && event.target) {
				onChangeText(event.target.value);
			}
		},

		type: ({ keyboardType, secureTextEntry, type }: TextInputProps) => {
			if (type) {
				return type;
			}

			if (secureTextEntry) {
				return 'password';
			}

			switch (keyboardType) {
				case 'email-address':
					return 'email';
				case 'number-pad':
				case 'numeric':
					return 'number';
				case 'phone-pad':
					return 'tel';
				case 'search' as any:
				case 'web-search':
					return 'search';
				case 'url':
					return 'url';

				default:
					return 'text';
			}
		},

		rows: 'numberOfLines',
	},
	{
		defaultProps: TextInputDefaultProps,
		rest: true,

		ignore: [
			'autoCorrect',
			'editable',
			'keyboardType',
			// 'multiline',
			'numberOfLines',
			'secureTextEntry',
			'style',
			'blurOnSubmit',
			'clearTextOnFocus',
			'onChangeText',
			'onLayout',
			'onSelectionChange',
			'onSubmitEditing',
			'selection',
			'selectTextOnFocus',
			'spellCheck',
			'accessibilityViewIsModal',
			'allowFontScaling',
			'caretHidden',
			'clearButtonMode',
			'dataDetectorTypes',
			'disableFullscreenUI',
			'enablesReturnKeyAutomatically',
			'hitSlop',
			'inlineImageLeft',
			'inlineImagePadding',
			'inputAccessoryViewID',
			'keyboardAppearance',
			'needsOffscreenAlphaCompositing',
			'onAccessibilityTap',
			'onContentSizeChange',
			'onEndEditing',
			'onMagicTap',
			'onScroll',
			'removeClippedSubviews',
			'renderToHardwareTextureAndroid',
			'returnKeyLabel',
			'returnKeyType',
			'scrollEnabled',
			'selectionColor',
			'selectionState',
			'shouldRasterizeIOS',
			'textBreakStrategy',
			'textContentType',
			'underlineColorAndroid',
		],
	}
);
