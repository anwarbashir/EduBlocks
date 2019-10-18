export default function define(Python: Blockly.BlockGenerators) {
  Python['start'] = function (block) {
    const mpath = 'import sys\n' + 'sys.path.append("/home/pi/MotorShield")\n';
    const aimport = 'from PiMotor import Arrow\n';
    const simport = 'from PiMotor import Sensor\n';
    const mimport = 'from PiMotor import Motor\n';
    const m1obj = 'm1 = Motor("MOTOR1", 1)\n';
    const m2obj = 'm2 = Motor("MOTOR2", 1)\n';
    const m3obj = 'm3 = Motor("MOTOR3", 1)\n';
    const m4obj = 'm4 = Motor("MOTOR4", 1)\n';
    const usobj = 'us = Sensor("ULTRASONIC", 10)\n';
    const ir1obj = 'ls1 = Sensor("IR1", 0)\n';
    const ir2obj = 'ls2 = Sensor("IR2", 0)\n';
    const code = mpath + aimport + simport + mimport + m1obj + m2obj + m3obj + m4obj + usobj + ir1obj + ir2obj;
    return code;
  };

  Python['arrow1_on'] = function (block) {
    const code = 'Arrow(1).on()\n';
    return code;
  };
  
  Python['arrow1_off'] = function (block) {
    const code = 'Arrow(1).off()\n';
    return code;
  };
  
  Python['arrow2_on'] = function (block) {
    const code = 'Arrow(2).on()\n';
    return code;
  };
  
  Python['arrow2_off'] = function (block) {
    const code = 'Arrow(2).off\n';
    return code;
  };
  
  Python['arrow3_on'] = function (block) {
    const code = 'Arrow(3).on()\n';
    return code;
  };
  
  Python['arrow3_off'] = function (block) {
    const code = 'Arrow(3).off()\n';
    return code;
  };
  
  Python['arrow4_on'] = function (block) {
    const code = 'Arrow(4).on()\n';
    return code;
  };
  
  Python['arrow4_off'] = function (block) {
    const code = 'Arrow(4).off()\n';
    return code;
  };
  
  Python['sonicCheck'] = function (block) {
    const code = 'us.sonicCheck()\n';
    return code;
  };
  
  Python['ls1Check'] = function (block) {
    const code = 'ls1.iRCheck()\n';
    return code;
  };
  
  Python['ls2Check'] = function (block) {
    const code = 'ls2.iRCheck()\n';
    return code;
  };
  
  Python['m1Forwardx'] = function (block) {
    const text_m1ForwardSpeed = block.getFieldValue('m1ForwardSpeed');
    const code = 'm1.forward(' + text_m1ForwardSpeed + ')\n';
    return code;
  };
  
  Python['m1Reversex'] = function (block) {
    const text_m1ReverseSpeed = block.getFieldValue('m1ReverseSpeed');
    const code = 'm1.reverse(' + text_m1ReverseSpeed + ')\n';
    return code;
  };
  
  Python['m1Stop'] = function (block) {
    const code = 'm1.stop()\n';
    return code;
  };
  
  Python['m2Forwardx'] = function (block) {
    const text_m2ForwardSpeed = block.getFieldValue('m2ForwardSpeed');
    const code = 'm2.forward(' + text_m2ForwardSpeed + ')\n';
    return code;
  };
  
  Python['m2Reversex'] = function (block) {
    const text_m2ReverseSpeed = block.getFieldValue('m2ReverseSpeed');
    const code = 'm2.reverse(' + text_m2ReverseSpeed + ')\n';
    return code;
  };
  
  Python['m2Stop'] = function (block) {
    const code = 'm2.stop()\n';
    return code;
  };
  
  Python['both_onWhiteLine'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'if ' + text_const + ':\n' + branch;
  };
  
  Python['ls1_onBlackLine'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };
  
  Python['ls2_onBlackLine'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };
  
  Python['try'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'try:\n' + branch;
  };

  Python['except'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'except KeyboardInterrupt:\n' + branch;
  };
  
  Python['GPIO_cleanup'] = function (block) {
    const code = 'GPIO.cleanup()\n';
    return code;
  };

  Python['import_signal'] = function (block) {
    const code = 'from signal import pause\n';
    return code;
  };

  Python['pause_s'] = function (block) {
    const code = 'pause()\n';
    return code;
  };

  Python['random'] = function (block) {
    const code = 'import random\n';
    return code; 
  };

  Python['while_true'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'while True:\n' + branch;
  };

  Python['pass'] = function (block) {
    const code = 'pass \n';
    return code;
  };

  Python['if'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'if ' + text_const + ':\n' + branch;
  };

  Python['class'] = function (block) {
    const text_const = Blockly.Python.valueToCode(block, 'class', Blockly.Python.ORDER_ATOMIC);
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'class ' + text_const + ':\n' + branch;
  };

  Python['varprint'] = function (block) {
    const text_const = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = 'print(' + text_const + ')\n';
    return code;
  };

  Python['ifcroc'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const dropdown_crocsigns = block.getFieldValue('crocsigns');
    const text_that = block.getFieldValue('that');
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' ' + dropdown_crocsigns + ' ' + text_that + ':\n' + branch;
    return code;
  };

  Python['varminus'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    // TODO: Assemble Python into code variable.
    const code = text_1 + ' -= ' + text_2 + '\n';
    return code;
  };

  Python['for'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_letter = Blockly.Python.valueToCode(block, 'letter', Blockly.Python.ORDER_ATOMIC);
    const text_no = Blockly.Python.valueToCode(block, 'no', Blockly.Python.ORDER_ATOMIC);
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_letter + ' in range(' + text_no + '):\n' + branch;
    return code;
  };

  Python['advancedforloops'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC)
    const text_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC)
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_x + ' in ' + text_y + ':\n' + branch;
    return code;
  };

  Python['ifequals'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const text_that = block.getFieldValue('that');
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' == ' + text_that + ':\n' + branch;
    return code;
  };

  Python['importinputs'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import inputs\n';
    return code;
  };

  Python['return2'] = function (block) {
    const text_return = Blockly.Python.valueToCode(block, 'return', Blockly.Python.ORDER_ATOMIC)
    // TODO: Assemble Python into code variable.
    const code = 'return ' + text_return + '\n';
    return code;
  };

  Python['elif'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };

  Python['else'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'else:\n' + branch;
  };

  Python['df'] = function (block) {
    const text_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
    const text_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC)
    const code = text_def + '(' + text_params + ')\n';
    return code;
  };

  Python['whileout'] = function (block) {
    var text_1 = Blockly.Python.valueToCode(block, 'cond', Blockly.Python.ORDER_ATOMIC);
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const code = 'while ' + text_1 + ':\n' + branch;
    return code;
  };

  Python['time'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import time\n';
    return code;
  };

  Python['import_math'] = function (block) {
    const code = 'import math\n';
    return code;
  };

  Python['import_audio'] = function (block) {
    const code = 'import audio\n';
    return code;
  };

  Python['sleep'] = function (block) {
    const text_sleeptime = block.getFieldValue('sleep');
    const code = 'sleep(' + text_sleeptime + ')\n';
    return code;
  };

  Python['print'] = function (block) {
    const text_print = Blockly.Python.valueToCode(block, 'print', Blockly.Python.ORDER_ATOMIC)
    // TODO: Assemble Python into code variable.
    const code = 'print("' + text_print + '")\n';
    return code;
  };

  Python['sleepnew'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'time.sleep(' +value_name+ ')\n';
    return code;
  };

  Python['printnew'] = function (block) {
    var text_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'Hello World';
    // TODO: Assemble Python into code variable.
    const code = 'print("' + text_print + '")\n';
    return code;
  };

  Python['equalsblocknew'] = function(block) {
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_text1+ ' = ' +value_text2+ '\n';
    return code;
  };

  Python['define'] = function (block) {
    const text_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC)
    const text_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC)
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    const code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
    return code;
  };

  Python['greater'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_v = block.getFieldValue('v');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // TODO: Assemble Python into code variable.
    const code = 'while ' + text_1 + ' > ' + text_v + ':\n' + branch;
    return code;
  };

  Python['buttonapressed'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = 'button_' + dropdown_name + '.is_pressed()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['ifinline'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'ifstate');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const value_iftext = Blockly.Python.valueToCode(block, 'iftext', Blockly.Python.ORDER_ATOMIC);
    const code = 'if ' + value_iftext + ':\n' + branch;
    return code;
  };

  Python['typeanything'] = function(block) {
    var text_stuff = Blockly.Python.valueToCode(block, 'stuff', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = text_stuff + '# your own code\n';
    return code;
  };

  Python['elifinline'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'ifstate');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const value_iftext = Blockly.Python.valueToCode(block, 'iftext', Blockly.Python.ORDER_ATOMIC);
    // const statements_ifstate = Blockly.Python.statementToCode(block, 'ifstate');
    // TODO: Assemble Python into code variable.
    const code = 'elif ' + value_iftext + ':\n' + branch;
    return code;
  };
 
  Python['internal'] = function(block) {
    var value_first = Blockly.Python.valueToCode(block, 'first', Blockly.Python.ORDER_ATOMIC);
    var text_choose = block.getFieldValue('choose');
    var value_last = Blockly.Python.valueToCode(block, 'last', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_first+ ' ' +text_choose+ ' ' +value_last;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Python['andor'] = Python['internal'];

  Python['not'] = function (block) {
    var value_bool = Blockly.Python.valueToCode(block, 'bool', Blockly.Python.ORDER_ATOMIC);
    const code = 'not ' +  value_bool;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['break'] = function (block) {
    const code = 'break\n ';
    return code;
  };

  Python['textinline'] = function(block) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = text_text;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['stringinline'] = function(block) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = '"' + text_text + '"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['sliderinline'] = function(block) {
    var text_text = block.getFieldValue('slider');
    // TODO: Assemble Python into code variable.
    var code = text_text;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  Python['varinlines'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var text_text = block.getFieldValue('NAME');
    var value_name = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_name + ' ' +text_text+ ' ' +value_name+ '\n';
    return code;
  };

  Python['boolstatus'] = function(block) {
    var dropdown_bool = block.getFieldValue('bool');
    var code = dropdown_bool;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['variables_get'] = function(block) {
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_var;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['variables_set'] = function(block) {
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'varset', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_var+ ' = ' +value_name+ '\n';
    return code;
  };

}
