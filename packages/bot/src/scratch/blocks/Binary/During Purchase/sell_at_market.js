import { translate }         from '../../../../utils/lang/i18n';

Blockly.Blocks.sell_at_market = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0         : translate('Sell at market price'),
            colour           : Blockly.Colours.Special1.colour,
            colourSecondary  : Blockly.Colours.Special1.colourSecondary,
            colourTertiary   : Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            nextStatement    : null,
            tooltip          : translate('Use this block to sell your contract at the market price.'),
            category         : Blockly.Categories.During_Purchase,
        };
    },
    meta(){
        return {
            'display_name': translate('Sell at market price'),
            'description' : translate('Use this block to sell your contract at the market price.'),
        };
    },
    onchange(event) {
        if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
            return;
        }

        if (event.type === Blockly.Events.BLOCK_CREATE || event.type === Blockly.Events.END_DRAG) {
            if (this.isDescendantOf('during_purchase')) {
                if (this.disabled) {
                    this.setDisabled(false);
                }
            } else if (!this.disabled) {
                this.setDisabled(true);
            }
        }
    },
};

Blockly.JavaScript.sell_at_market = () => 'Bot.sellAtMarket();\n';
