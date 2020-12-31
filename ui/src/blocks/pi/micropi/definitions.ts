export default function define(Blocks: Blockly.BlockDefinitions) {

  var maincolour = "#83c9c7";
  var bordercolour = "#b7e0df";
  var inputcolour = "#83c9c7";
  Blocks['import micropi'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import micropi');
      this.setPreviousStatement(false, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Place at start of program.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['oled'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('oled');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Call OLED');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['oled_setline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('oled.setline(')
        .appendField(new Blockly.FieldTextInput('1'), 'line')
        .appendField(',')
        .appendField('"')
        .appendField(new Blockly.FieldTextInput('Hello World'), 'msg')
        .appendField('"')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Write Text Line 1');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['oled_reset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('oled_reset');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Display Stats');
      this.setHelpUrl('http://www.example.com/');
    },
};

  Blocks['buzzer'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('buzzer');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Call Buzzer');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['buzzer_start'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('buzzer_start');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Start Buzzer');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['buzzer_stop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('buzzer_stop');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Stop Buzzer');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pb1'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pb1');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check for pb1');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pb2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pb2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check for pb2');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['led'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('led');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Call led (neopixels)');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['led_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('led.set_color(')
        .appendField(new Blockly.FieldTextInput('0'), 'led')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('255'), 'val1')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('0'), 'val2')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('0'), 'val3')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Switch led (0 to 3) on and set colour');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['led_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('led.set_color(')
        .appendField(new Blockly.FieldTextInput('0'), 'led')
        .appendField('0 , 0 , 0)');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Switch led (0 to 3) off');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['m1_fwd'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m1.forward(')
        .appendField(new Blockly.FieldTextInput('60'), 'm1_Speed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set forward speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m1_rev'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m1.reverse(')
        .appendField(new Blockly.FieldTextInput('50'), 'm1_Speed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set reverse speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m1_stop'] = {
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
  
  Blocks['m2_fwd'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m2.forward(')
        .appendField(new Blockly.FieldTextInput('60'), 'm2_Speed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set forward speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m2_rev'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('m2.reverse(')
        .appendField(new Blockly.FieldTextInput('50'), 'm2_Speed')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Set reverse speed.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['m2_stop'] = {
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

  Blocks['sonic'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sonic');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check ultrasonic sensor');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['ls1'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('ls1');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check line sensor 1.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['ls2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('ls2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Check line sensor 2.');
      this.setHelpUrl('http://www.example.com/');
    },
  }; 

  Blocks['onWhite'] = {
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

