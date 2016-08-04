'use strict';

goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');


Blockly.Blocks['mover'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldTextInput("0"), "nosteps")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["Forward", "front"], ["Backward", "back"],["Upward", "up"],["Downward", "down"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(175);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mover_pintando'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldTextInput("0"), "pasos")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["Forward", "front"], ["Backward", "back"]]), "directio")
        .appendField("painting")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(175);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['girar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldAngle(90), "grades")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "side");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(175);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for")
        .appendField(new Blockly.FieldTextInput("0"), "secs")
        .appendField("seconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(157);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(157);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blinker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "directional")
        .appendField("Blinker");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(192);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lights:")
        .appendField("Front")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "frontlight")
        .appendField("Back")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "backlight")
        .appendField("On")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "on");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(192);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sonido'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play")
        .appendField(new Blockly.FieldDropdown([["Cat", "gato.mp3"], ["Dog", "perro.mp3"], ["Lion", "leon.mp3"], ["Chicken", "pollo.mp3"]]), "sonido");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(247);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['eventos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On click button");
    this.appendStatementInput("codigo");
    this.setColour(355);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    Blockly.BlockSvg.START_HAT = true;
  }
};

Blockly.Blocks['floor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Piso");
    this.setOutput(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};