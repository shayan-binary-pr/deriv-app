import { translate } from '../../../../../utils/lang/i18n';

Blockly.Blocks.signal_ema_period = {
    init() {
        this.jsonInit({
            message0: translate('Signal EMA Period %1'),
            args0   : [
                {
                    type : 'input_value',
                    name : 'SIGNAL_EMA_PERIOD',
                    check: null,
                },
            ],
            colour           : Blockly.Colours.Base.colour,
            colourSecondary  : Blockly.Colours.Base.colourSecondary,
            colourTertiary   : Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement    : null,
        });

        this.setMovable(false);
        this.setDeletable(false);
    },
    onchange      : Blockly.Blocks.input_list.onchange,
    allowedParents: ['macda_statement'],
};

Blockly.JavaScript.signal_ema_period = () => {};
