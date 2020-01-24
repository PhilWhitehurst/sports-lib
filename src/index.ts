import { EventImporterGPX } from './events/adapters/importers/gpx/importer.gpx';
import { EventInterface } from './events/event.interface';
import { EventImporterTCX } from './events/adapters/importers/tcx/importer.tcx';
import { EventImporterFIT } from './events/adapters/importers/fit/importer.fit';
import { EventImporterSuuntoJSON } from './events/adapters/importers/suunto/importer.suunto.json';
import { EventImporterJSON } from './events/adapters/importers/json/importer.json';
import { EventJSONInterface } from './events/event.json.interface';

export class SportsLib {

  /**
   * Parses and returns an event using GPX format
   * @param gpxString
   * @param domParser custom DomParse (case of NodeJs usage)
   */
  public static importFromGPX(gpxString: string, domParser?: Function): Promise<EventInterface> {
    return EventImporterGPX.getFromString(gpxString, domParser);
  };

  /**
   * Parses and returns an event using TCX format
   * @param xmlDocument
   */
  public static importFromTCX(xmlDocument: XMLDocument): Promise<EventInterface> {
    return EventImporterTCX.getFromXML(xmlDocument);
  };

  /**
   * Parses and returns an event using FIT format
   * @param arrayBuffer
   */
  public static importFromFit(arrayBuffer: ArrayBuffer): Promise<EventInterface> {
    return EventImporterFIT.getFromArrayBuffer(arrayBuffer);
  };

  /**
   * Parses and returns an event using Suunto format
   * @param jsonString
   */
  public static importFromSuunto(jsonString: string): Promise<EventInterface> {
    return EventImporterSuuntoJSON.getFromJSONString(jsonString);
  }

  /**
   * Parses and returns an event using native format (SportsLib exported format)
   * @param json EventJSONInterface
   */
  public static importFromJSON(json: EventJSONInterface): EventInterface {
    return EventImporterJSON.getEventFromJSON(json);
  }
}
