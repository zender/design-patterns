import {
  describe,
  it,
  expect,
} from "angular2/testing";
import {CommandFactory} from "./CommandFactory";

describe('Command', () => {

  let cf: CommandFactory = CommandFactory.init();

  it('Should not find  command.', () => {
    expect(function () {
      cf.execute('Unknown');
    }).toThrow(new Error('Command Unknown not found'));

  });

  it('Should execute Light On command.', () => {
    cf.execute('Light On');
    expect(cf.getCommand('Light On').isExecuted()).toEqual(true);
  });

  it('Should execute Light Off command.', () => {
    cf.execute('Light Off');
    expect(cf.getCommand('Light Off').isExecuted()).toEqual(true);
  });

  it('Should list commands.', () => {
    expect(cf.listCommands().length).toEqual(2);
    expect(cf.listCommands()).toEqual(['Light On', 'Light Off']);
  });
});
