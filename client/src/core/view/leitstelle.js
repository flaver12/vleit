export function renderLeitstelle() {
    return `
    <div class="task-creation">
      <form class="main-form selection-from">
          <div class="form-group">
            <label class="form-label" for="input-example-1">Stichwort</label>
            <select class="form-select situation" name="situation">
              <option disabled selected value> -- select an option -- </option>
              <option value="Banküberfall">Banküberfall</option>
              <option value="Bombenfund">Bombenfund</option>
              <option value="BMA">BMA</option>
              <option value="Brand">Brand</option>
              <option value="Demo">Demo</option>
              <option value="EMA">EMA</option>
              <option value="Schadstoffe">Schadstoffe</option>
              <option value="Gewaltverbrechen/Schlägerei">Gewaltverbrechen/Schlägerei</option>
              <option value="MANV">MANV</option>
              <option value="Raub/Diebstahl">Raub/Diebstahl</option>
              <option value="RTW">RTW</option>
              <option value="RTW+NEF">RTW+NEF</option>
              <option value="Sonstiges">Sonstiges</option>
            <option value="VU">VU</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="input-example-1">Ergänzung</label>
            <textarea class="form-input description" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label" for="input-example-1">Örtlichkeit</label>
            <input class="form-input place" type="text" id="input-example-1" placeholder="Kino">
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="RW1" name="wache" class="station-select" data-role="Rettungsdienst">
                  <i class="form-icon"></i> Rettungswache 1
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="RW2" name="wache" class="station-select" data-role="Rettungsdienst">
                  <i class="form-icon"></i> Rettungswache 2
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="RW3" name="wache" class="station-select" data-role="Rettungsdienst">
                  <i class="form-icon"></i> Rettungswache 3
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="RW4" name="wache" class="station-select" data-role="Rettungsdienst">
                  <i class="form-icon"></i> Rettungswache 4
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="RW5" name="wache" class="station-select" data-role="Rettungsdienst">
                  <i class="form-icon"></i> Rettungswache 5
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="FuRW1" name="wache" class="station-select" data-role="Feuerwehr">
                  <i class="form-icon"></i> Feuerwache 1
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="FuRW2" name="wache" class="station-select" data-role="Feuerwehr">
                  <i class="form-icon"></i> Feuerwache 2
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="FFW3" name="wache" class="station-select" data-role="Feuerwehr">
                  <i class="form-icon"></i> FFW 3
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="FFW4" name="wache" class="station-select" data-role="Feuerwehr">
                  <i class="form-icon"></i> FFW 4
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="FFW5" name="wache" class="station-select" data-role="Feuerwehr">
                  <i class="form-icon"></i> FFW 6
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="FFW6" name="wache" class="station-select" data-role="Feuerwehr">
                  <i class="form-icon"></i> FFW 6
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="Pol1" name="wache" class="station-select" data-role="Polizei">
                  <i class="form-icon"></i> Polizeiwache 1
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="Pol2" name="wache" class="station-select" data-role="Polizei">
                  <i class="form-icon"></i> Polizeiwache 2
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-9 col-sm-12">
              <div class="form-group">
                <label class="form-checkbox">
                  <input type="checkbox" value="BePo" name="wache" class="station-select" data-role="Polizei">
                  <i class="form-icon"></i> Bereitschaftspolizei
                </label>
              </div>
            </div>
          </div>
          <br />
          <div class="vehicles"></div>
          <button class="btn btn-primary input-group-btn task-creation-btn">Login</button>
      </form>
    </div>
    <div class="tasks">
        <table class="table list">
          <thead>
            <tr>
              <th>Stichwort</th>
              <th>Ergänzung</th> 
              <th>Örtlichkeit</th>
              <th>Wache</th>
              <th>Fahrzeuge</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
    </div>
    `;
}