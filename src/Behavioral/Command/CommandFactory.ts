import {CommandInterface} from './CommandInterface';
import {LightOnCommand} from './LightOnCommand';
import {LightOffCommand} from './LightOffCommand';

export class CommandFactory {

  private commands:Array<CommandInterface> = new Array();

  static init():CommandFactory {
    var cf = new CommandFactory();
    cf.addCommand(new LightOnCommand());
    cf.addCommand(new LightOffCommand());

    return cf;
  }

  public addCommand(command:CommandInterface):void {
    this.commands.push(command);
  }

  public getCommand(name:string):CommandInterface {
    return this.commands.find(function (command:CommandInterface) {
      return command.getName() === name;
    });
  }

  public execute(name:string):void {
    var command = this.getCommand(name);

    if (command === undefined) {
      throw new Error('Command %name% not found'.replace('%name%', name));
    }

    command.apply();
  }

  public listCommands():Array<string> {
    return this.commands.map(function (command:CommandInterface) {
      return command.getName();
    });
  }
}
