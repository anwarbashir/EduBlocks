export default function define(Blocks: Blockly.BlockDefinitions) {

  var maincolour = "#83c9c7";
  var bordercolour = "#b7e0df";
  var inputcolour = "#83c9c7";
  Blocks['start'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('start');
      this.setPreviousStatement(false, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Place at start of program.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow1_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(1).on');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 1 on.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow1_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(1).off');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 1 off.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow2_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(2).on');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 2 on.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow2_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(2).off');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 2 off.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow3_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(3).on');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 3 on.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow3_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(3).off');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 3 off.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow4_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(4).on');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 4 on.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['arrow4_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Arrow(4).off');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Turns Arrow 4 off.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['sonicCheck'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Check sonic sensor');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check sonic sensor.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['ls1Check'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Check line sensor 1');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check line sensor 1.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['ls2Check'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Check line sensor 2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check line sensor 2.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m1Forwardx'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m1.forward(')
        .appendField(new Blockly.FieldTextInput('60'), 'm1ForwardSpeed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set forward speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m1Reversex'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m1.reverse(')
        .appendField(new Blockly.FieldTextInput('50'), 'm1ReverseSpeed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set reverse speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m1Stop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m1.stop');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Motor 1 stop.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m2Forwardx'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m2.forward(')
        .appendField(new Blockly.FieldTextInput('60'), 'm2ForwardSpeed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set forward speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m2Reversex'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m2.reverse(')
        .appendField(new Blockly.FieldTextInput('50'), 'm2ReverseSpeed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set reverse speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m2Stop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m2.stop');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Motor 2 stop.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['both_onWhiteLine'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('ls1.Triggered == False and ls2.Triggered == False'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('If statement.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['ls1_onBlackLine'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif')
        .appendField(new Blockly.FieldTextInput('ls1.Triggered == True and ls2.Triggered == False'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Elif statement.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['ls2_onBlackLine'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif')
        .appendField(new Blockly.FieldTextInput('ls1.Triggered == False and ls2.Triggered == True'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Elif statement.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['try'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('try:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('try loop.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['except'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('except KeyboardInterrupt:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('except keyboard interrupt.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['GPIO_cleanup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('GPIO.cleanup()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('GPIO Cleanup.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
}

