# Überblick

```
          APP
           |
           |
           v
    ====Facade==== <----- ersetzt ------ ====Facade'====                  
       |    |                               |      |
       v    |     \                  /      v      |
    Module  |      <---- resuse -----     Module'  |
     |      v     /                  \     |       v
     |   Services                          |    Services'
     |                                     |
     v                                     v                              
  Components                          Components
```


# Regeln:

  - App greift über Facade zu
  - Substitut greift nicht über Facade zu, damit kein zyklischer Verweis entsteht
  - Facade: ts-file mit export ... from ...
    - Alternative: Module-Map
  - Pro Modul eine eigene Facade
  - Austausch über File-Mapping in tsconfig oder angular.json

# Beispiele

## Branch customize-module

- Austausch über tsconfig.json

## Branch customize-module

- Austausch über angular.json
- Es gibt eine eigene Konfiguration customer-a

Standard-Build: ng serve
Alternativer Build: ng serve -c customer-a


