export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['led_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['red', 'red'], ['yellow', 'yellow'], ['green', 'green'], ['blue', 'blue']]), 'led_colour')
        .appendField('_led_on()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Turns the chosen LED on.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['led_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['red', 'red'], ['yellow', 'yellow'], ['green', 'green'], ['blue', 'blue']]), 'led_colour')
        .appendField('_led_off()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Turns the chosen LED off.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['button_pressed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('button_pressed()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('When the button is pressed do:');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['all_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('all_on()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Turn all 3 LEDs on.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['all_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('all_off()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Turn all 3 LEDs off.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['all_blink'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('all_blink()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Make all 3 LEDs blink.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['button'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('button_test()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Print the button status.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['buzzer'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('buzzer_')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off']]), 'NAME')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Turns the buzzer on or off');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['blink'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['red', 'red'], ['yellow', 'yellow'], ['green', 'green']]), 'NAME')
        .appendField('_led_blink()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Make a chosen LED blink');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['user_input'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('user_input()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Blink the LED to  a user given amount. Use the output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['crossing'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['green', 'green'], ['amber', 'amber'], ['red', 'red'], ['red amber', 'ramber'], ['flash amber', 'flamber'], ['beep', 'beep']]), 'NAME')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Commands to create a traffic light.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['dot'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('dot()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Dot in morse code.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['dash'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('dash()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Dash in morse code.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['letter'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('letter_space()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Letter space in morse code.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['word'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('word_space()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Word space in morse code.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['2led_on'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['red', 'red'], ['blue', 'blue']]), 'led_colour')
        .appendField('_led_on()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Turns the chosen LED on.');
      this.setHelpUrl('http://www.example.com/');
    },
  };


  Blocks['2led_off'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['red', 'red'], ['blue', 'blue']]), 'led_colour')
        .appendField('_led_off()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Turns the chosen LED off.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['2buzzer'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('buzzer_')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off']]), 'NAME')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Turns the buzzer on or off');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['temperature'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('temperature()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Prints the temperature in °C and °F. Use the output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['ldr'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('ldr()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Charges up a capacitor using light. Use output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['capacitor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('capacitor_drain()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Drain the capacitor.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['motion'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('motion_reading()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Get a reading from the motion sensor.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['alarm'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('alarm()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Create a motion alarm.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['forward'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('forward()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Make the robot go forward.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['backward'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('backward()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Make the robot go backward.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['turn_left'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('turn_left()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Turn the robot left.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['turn_right'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('turn_right()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Turn the robot right.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['stop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('stop()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Stop the motors.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['get_reading'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('get_reading()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Get the distance between the wall and robot.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['line_test'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('line_test()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Test the line sensor.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['key_control'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('key_control()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Control the robot using arrow keys. Use the output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['line_follower'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('line_follower()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Follow a line.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['avoid'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('avoid()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Avoid obstacles.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
}