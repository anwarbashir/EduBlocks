export default function define(Python: Blockly.BlockGenerators) {
  Python['import micropi'] = function (block) {
    const micropi = 'from micropi import OLED, Buzzer, Buttons, LED, Motor, Sensor\n';
    const m1 = 'm1 = Motor("MOTOR1", 1)\n';
    const m2 = 'm2 = Motor("MOTOR2", 1)\n';
    const us = 'us = Sensor("ULTRASONIC", 10)\n';
    const ls1 = 'ls1 = Sensor("IR1", 0)\n';
    const ls2 = 'ls2 = Sensor("IR2", 0)\n';
    const code = micropi + m1 + m2 + us + ls1 + ls2;
    return code;
  };

  Python['oled'] = function (block) {
    const code = 'oled = OLED()\n';
    return code;
  };

  Python['oled_setline'] = function (block) {
    const line = block.getFieldValue('line');
    const msg = block.getFieldValue('msg');
    const code = 'oled.setline(' + line + ',' + '"' + msg + '"' + ')\n';
    return code;
  };

  Python['oled_reset'] = function (block) {
    const code = 'oled.stats()\n';
    return code;
  };
  
  Python['buzzer'] = function (block) {
    const code = 'buzzer = Buzzer()\n';
    return code;
  };

  Python['buzzer_start'] = function (block) {
    const code = 'buzzer.start(588, 128)\n';
    return code;
  };

  Python['buzzer_stop'] = function (block) {
    const code = 'buzzer.stop()\n';
    return code;
  };

  Python['pb1'] = function (block) {
    const code = 'pb1 = Buttons()\n';
    return code;
  };

  Python['pb2'] = function (block) {
    const code = 'pb2 = Buttons()\n';
    return code;
  };
  
  Python['led'] = function (block) {
    const code = 'led = LED()\n';
    return code;
  };

  Python['led_on'] = function (block) {
    const led = block.getFieldValue('led');
    const val1 = block.getFieldValue('val1');
    const val2 = block.getFieldValue('val2');
    const val3 = block.getFieldValue('val3'); 
    const code = 'led.set_color(' + led + ',' + val1 + ',' + val2 + ',' + val3 + ')\n';
    return code;
  };

  Python['led_off'] = function (block) {
    const led = block.getFieldValue('led');
    const code = 'led.set_color(' + led + ',' + '0' + ',' + '0' + ',' + '0' + ')\n';
    return code;
  };
  
  Python['m1_fwd'] = function (block) {
    const m1_Speed = block.getFieldValue('m1_Speed');
    const code = 'm1.forward(' + m1_Speed + ')\n';
    return code;
  };
  
  Python['m1_rev'] = function (block) {
    const m1_Speed = block.getFieldValue('m1_Speed');
    const code = 'm1.reverse(' + m1_Speed + ')\n';
    return code;
  };
  
  Python['m1_stop'] = function (block) {
    const code = 'm1.stop()\n';
    return code;
  };
  
  Python['m2_fwd'] = function (block) {
    const m2_Speed = block.getFieldValue('m2_Speed');
    const code = 'm2.forward(' + m2_Speed + ')\n';
    return code;
  };
  
  Python['m2_rev'] = function (block) {
    const m2_Speed = block.getFieldValue('m2_Speed');
    const code = 'm2.reverse(' + m2_Speed + ')\n';
    return code;
  };
  
  Python['m2_stop'] = function (block) {
    const code = 'm2.stop()\n';
    return code;
  };

  Python['sonic'] = function (block) {
    const code = 'us.sonicCheck()\n';
    return code;
  };  

  Python['ls1'] = function (block) {
    const code = 'ls1.iRCheck()\n';
    return code;
  };

  Python['ls2'] = function (block) {
    const code = 'ls2.iRCheck()\n';
    return code;
  };
  
  Python['onWhite'] = function (block) {
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

}
