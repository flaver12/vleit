export function renderLeitstelle() {
    return `
    <div class="task-creation">
      <form class="main-form">
          Stichwort: <br>
          <select name="situation" class="situation">
            <option disabled selected value> -- select an option -- </option>
            <option value="Sturz">Sturz</option>
            <option value="Schussverletzung">Schussverletzung</option>
            <option value="Bewustlossigkeit">Bewustlossigkeit</option>
            <option value="Alkoholintoxikation">Alkoholintoxikation</option>
            <option value="Drogenintoxikation">Drogenintoxikation</option>
            <option value="Einweisung">Einweisung</option>
            <option value="OrgL-/LNA-Zubringer">OrgL-/LNA-Zubringer</option>
            <option value="Hilfeleistung">Hilfeleistung</option>
            <option value="RTH-Landeplatztransfer">RTH-Landeplatztransfer</option>
            <option value="Sicherungswache / Sitzbereitschaft">Sicherungswache / Sitzbereitschaft</option>
            <option  disabled selected value >------------------</option>
            <option value="Zimmerbrand">Zimmerbrand</option>
            <option value="Brand Wohnung">Brand Wohnung</option>
            <option value="ausgelöste Brandmeldeanlage">ausgelöste Brandmeldeanlage</option>
            <option value="Brand 3 in großer Ausdehnung oder mit Menschenleben in Gefahr">Brand 3 in großer Ausdehnung oder mit Menschenleben in Gefahr</option>
            <option value="Großbrand">Großbrand</option>
            <option value="Waldbrand">Waldbrand</option>
            <option  disabled selected value >------------------</option>
            <option value="Raub/Diebstahl">Raub/Diebstahl</option>
            <option value="VU">VU</option>
            <option value="EMA">EMA</option>
            <option value="Amtshilfe">Amtshilfe</option>
            <option value="Gewaltverbrechen">Gewaltverbrechen</option>
            <option value="Banküberfall">Banküberfall</option>
            <option value="Demo">Demo</option>
            <option value="Sonderlage">Sonderlage</option>
            <option  disabled selected value >------------------</option>
            <option value="Massenunfall, Unfall mit Schienenfahrzeug">Massenunfall, Unfall mit Schienenfahrzeug</option>
            <option value="PKW, eingeklemmte Person">PKW, eingeklemmte Person</option>
            <option value="Radioaktive Stoffe">Radioaktive Stoffe</option>
            <option value="chemische Stoffe">chemische Stoffe</option>
            <option value="ManV5-20">ManV5-20</option>
          </select><br>
          Ergänzung:<br>
          <textarea name="description" cols="30" rows="10" class="description"></textarea>
          <br>
          Örtlichkeit:<br>
          <input type="text" name="location" class="location">
          <br>
          Wache:<br>
          <div class="form-group">
          <div class="col-9 col-sm-12">
            <label class="form-radio">
              <input type="radio" name="wache" value="Rettungswache">
              <i class="form-icon"></i>
            </label>
          </div>
          </div>
          <option value="RW 1">RW 1</option>
          <option value="RW 2">RW 2</option>
          <option value="RW 3">RW 3</option>
          <option value="RW 4">RW 4</option>
          <option value="RW 5">RW 5</option>
          <option value="FuRW 1">FuRW 1</option>
          <option value="FuRW 2">FuRW 2</option>
          <option value="FFW 3">FFW 3</option>
          <option value="FFW 4">FFW 4</option>
          <option value="FFW 5">FFW 5</option>
          <option value="FFW 6">FFW 6</option>
          <option value="Pol 1">Pol 1</option>
          <option value="Pol 2">Pol 2</option>
          <option value="BePo">Bepo</option>
          <option value="Stadtwerke">Stadtwerke</option>
          <br />
          <div class="vehicles"></div>
      </form>
      <button class="btn btn-primary input-group-btn task-creation-btn">Login</button>
    </div>
    <div class="tasks">
      <table class="list">
          <tr>
            <th>Stichwort</th>
            <th>Ergänzung</th> 
            <th>Örtlichkeit</th>
            <th>Wache</th>
            <th>Fahrzeuge</th>
            <th>Status</th>
          </tr>
        </table>
    </div>
    `;
}