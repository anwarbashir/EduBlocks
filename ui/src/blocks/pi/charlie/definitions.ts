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
  
  Blocks['import_signal'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from signal import pause');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Imports the signal library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pause_s'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pause()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Pause');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['random'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import random');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Imports the random library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['while_true'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while True:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Forever loop.');
      this.setHelpUrl('https://t.co/PCZC5EFe4D');
    },
  };

  Blocks['pass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pass');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Pass to the next command');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['if'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('0'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('If Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['class'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('class')
      this.appendValueInput("class")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Class Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['varprint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(')
      this.appendValueInput('var')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Use this to print a variable, a number, or even a string if you put in the quotes yourself.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['ifcroc'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('this'), 'this')
        .appendField(new Blockly.FieldDropdown([['>', '>'], ['<', '<']]), 'crocsigns')
        .appendField(new Blockly.FieldTextInput('that'), 'that')
        .appendField(':');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('If statement with greater and less than');
      this.setHelpUrl('');
    },
  };

  Blocks['varminus'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '1')
        .appendField('-=')
        .appendField(new Blockly.FieldTextInput('0'), '2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Variable with - and =');
      this.setHelpUrl('');
    },
  };

  Blocks['for'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('letter')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in range(');
      this.appendValueInput('no')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('Create a for loop');
    },
  };

  Blocks['advancedforloops'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('x')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in');
      this.appendValueInput('y')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(":");
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

//   deprecated
  Blocks['ifequals'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if')
        .appendField(new Blockly.FieldTextInput('this'), 'this')
        .appendField('==')
        .appendField(new Blockly.FieldTextInput('that'), 'that');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['importinputs'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import inputs');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['return2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return');
      this.appendValueInput('return')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

//   deprecated
  Blocks['elif'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif')
        .appendField(new Blockly.FieldTextInput('0'), 'var')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Elif Statement.');
      this.setHelpUrl('');
    },
  };

  Blocks['else'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('else:');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Else statement');
      this.setHelpUrl('');
    },
  };

  Blocks['df'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput("params")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('call a define function');
      this.setHelpUrl('');
    },
  };

  Blocks['whileout'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while');
      this.appendValueInput("cond")
        .setCheck("Boolean");
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };



  Blocks['import_math'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import math');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Imports the math library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_audio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import audio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Imports the audio library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['sleep'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sleep(')
      this.appendValueInput("sleep")
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Sleep');
      this.setHelpUrl('');
    },
  };

  Blocks['sleepnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("time.sleep(");
      this.appendValueInput("sleep")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("Wait (in milliseconds)");
      this.setHelpUrl("");
    }
  };

  //deprecated

  Blocks['print'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print("');
      this.appendValueInput('print')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('" )');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Use this to print to the output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['printnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print("')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('" )');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Use this to print a string to the output box.');
      this.setHelpUrl('');
    },
  };

  Blocks['equalsblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0'), '1')
        .appendField('=')
        .appendField(new Blockly.FieldTextInput('0'), '2');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['equalsblocknew'] = {
    init: function() {
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME')
      this.appendValueInput("text2")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("Assign, increment or decrement a variable");
      this.setHelpUrl("");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setOutput(true, "Boolean");
    }
  };

  Blocks['define'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('def ');
      this.appendValueInput('1')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput('2')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

//   deprecated
  Blocks['greater'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while')
        .appendField(new Blockly.FieldTextInput(''), '1')
        .appendField('>')
        .appendField(new Blockly.FieldTextInput(''), 'v')
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['ifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if');
      this.appendValueInput("iftext")
        .setCheck("Boolean");
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('If block with inline input');
      this.setHelpUrl('');
    },
  };

  Blocks['typeanything'] = {
    init: function() {
      this.appendValueInput("stuff")
        .setCheck(null);
      this.appendDummyInput()   
          .appendField("# your own code");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("Type any python code into this block");
      this.setHelpUrl("");
    }
  };

  Blocks['elifinline'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('elif');
      this.appendValueInput('iftext')
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('ifstate')
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('ElIf block with inline input');
      this.setHelpUrl('');
    },
  };

  Blocks['buttonapressed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('button_')
        .appendField(new Blockly.FieldDropdown([['a', 'a'], ['b', 'b']]), 'NAME')
        .appendField('.is_pressed()');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('Button A Pressed');
      this.setHelpUrl('');
    },
  };

  Blocks['internal'] = {
    init: function() {
        // should you translate to other languages
        // var rtlOperators = [
        //     // ['=', 'EQ'],
        //     // ['\u2260', 'NEQ'],
        //     ['\u200F<\u200F', 'LT'],
        //     ['\u200F\u2264\u200F', 'LTE'],
        //     ['\u200F>\u200F', 'GT'],
        //     ['\u200F\u2265\u200F', 'GTE']
        //   ];
          var ltrOperators = [
            ['==', '=='],
            ['!=', '!='],
            ['<', '<'],
            ['<=', '<='],
            ['>', '>'],
            ['>=', '>=']
          ];
          var OPERATORS = ltrOperators;
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(OPERATORS), "choose")
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['textinline'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF", "#FFFFFF", bordercolour);
      this.setTooltip("Text input for inline input");
      this.setHelpUrl("");
    }
  };

  Blocks['stringinline'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldString(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF", "#FFFFFF", bordercolour);
      this.setTooltip("String input for inline input");
      this.setHelpUrl("");
    }
  };

  Blocks['sliderinline'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldSlider("0", "0", "1", "1", "1", "Value"), 'slider');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF", "#FFFFFF", bordercolour);
      this.setTooltip("Slider input for inline input");
      this.setHelpUrl("");
    }
  };

  Blocks['varinlines'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("variable"), "var")
        .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME')
      this.appendValueInput("value")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("assign a value, increment, or decrement a variable");
      this.setHelpUrl("");
    }
  };

  Blocks['boolstatus'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ["True","True"], 
            ["False","False"]
        ]), "bool");
      this.setOutput(true, "Boolean");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  

  Blocks['andor'] = {
    init: function() {
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["and", "and"], ["or", "or"]]), "choose")
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['not'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('not');
      this.appendValueInput("bool")
        .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('negates a Boolean value');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['break'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('break');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip('breaks out of a loop');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['variables_get'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("var"), "VAR");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#ff0066","#ff0066","#b3235a");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blocks['variables_set'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(""), "VAR")
        .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME')
      this.appendValueInput("varset")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(maincolour, inputcolour, bordercolour);
      this.setTooltip("assign a value, increment, or decrement a variable");
      this.setHelpUrl("");
    }
  };

  
}

