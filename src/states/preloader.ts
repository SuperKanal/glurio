import * as Assets from '../assets';
import {escapeHtml} from "../utils/escape";
import * as AssetUtils from '../utils/assetUtils';
/**
 * Preload all game resources here
 */
export default class Preloader extends Phaser.State {
    private nextState: string = 'connection';

    public preload(): void {
        // Load tilemap
        this.game.load.tilemap('mapdata', Assets.Atlases.MapMap.getJSONHash(), null, Phaser.Tilemap.TILED_JSON);

        //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:
        this.game.load.image('mapimage', Assets.Atlases.MapMap.getPNG());

        // Load entities graphics
        this.game.load.image(Assets.Images.ImagesBox.getName(), Assets.Images.ImagesBox.getPNG());
        this.game.load.image(Assets.Images.ImagesStonegenerator.getName(), Assets.Images.ImagesStonegenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesWoodgenerator.getName(), Assets.Images.ImagesWoodgenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesWinterstonegenerator.getName(), Assets.Images.ImagesWinterstonegenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesWinterwoodgenerator.getName(), Assets.Images.ImagesWinterwoodgenerator.getPNG());
        this.game.load.image(Assets.Images.ImagesEgg.getName(), Assets.Images.ImagesEgg.getPNG());
        this.game.load.image(Assets.Images.ImagesCarrot.getName(), Assets.Images.ImagesCarrot.getPNG());
        this.game.load.image(Assets.Images.ImagesMeat.getName(), Assets.Images.ImagesMeat.getPNG());
        this.game.load.image(Assets.Images.ImagesWoodwall.getName(), Assets.Images.ImagesWoodwall.getPNG());  
        this.game.load.image(Assets.Images.ImagesStonewall.getName(), Assets.Images.ImagesStonewall.getPNG());  
        this.game.load.image(Assets.Images.ImagesGarden.getName(), Assets.Images.ImagesGarden.getPNG());  
        this.game.load.image(Assets.Images.ImagesTower.getName(), Assets.Images.ImagesTower.getPNG());  
        this.game.load.image(Assets.Images.ImagesDoor.getName(), Assets.Images.ImagesDoor.getPNG());  
        this.game.load.image(Assets.Images.ImagesHeartstone.getName(), Assets.Images.ImagesHeartstone.getPNG());  
        this.game.load.image(Assets.Images.ImagesKnight.getName(), Assets.Images.ImagesKnight.getPNG());  
        this.game.load.image(Assets.Images.ImagesGardener.getName(), Assets.Images.ImagesGardener.getPNG());  
        this.game.load.image(Assets.Images.ImagesGuard.getName(), Assets.Images.ImagesGuard.getPNG());  
        this.game.load.image(Assets.Images.ImagesFollower.getName(), Assets.Images.ImagesFollower.getPNG());  
        this.game.load.image(Assets.Images.ImagesFoodcrate.getName(), Assets.Images.ImagesFoodcrate.getPNG());  
        this.game.load.image(Assets.Images.ImagesWoodcrate.getName(), Assets.Images.ImagesWoodcrate.getPNG());  
        this.game.load.image(Assets.Images.ImagesStonecrate.getName(), Assets.Images.ImagesStonecrate.getPNG());
        this.game.load.image(Assets.Images.ImagesCarwolf.getName(), Assets.Images.ImagesCarwolf.getPNG());
        this.game.load.image(Assets.Images.ImagesUnmount.getName(), Assets.Images.ImagesUnmount.getPNG());
        this.game.load.image(Assets.Images.ImagesMannequin.getName(), Assets.Images.ImagesMannequin.getPNG());
        this.game.load.image(Assets.Images.ImagesPickupbot.getName(), Assets.Images.ImagesPickupbot.getPNG());
        this.game.load.image(Assets.Images.ImagesBuild.getName(), Assets.Images.ImagesBuild.getPNG());
        this.game.load.image(Assets.Images.ImagesSoccerball.getName(), Assets.Images.ImagesSoccerball.getPNG());
        this.game.load.image(Assets.Images.ImagesTeam.getName(), Assets.Images.ImagesTeam.getPNG());
        this.game.load.image(Assets.Images.ImagesMinimapwinner.getName(), Assets.Images.ImagesMinimapwinner.getPNG());
        this.game.load.image(Assets.Images.ImagesCrown.getName(), Assets.Images.ImagesCrown.getPNG());
        this.game.load.image(Assets.Images.ImagesWinterwall.getName(), Assets.Images.ImagesWinterwall.getPNG());
        this.game.load.image(Assets.Images.ImagesWinterfloor.getName(), Assets.Images.ImagesWinterfloor.getPNG());
        this.game.load.image(Assets.Images.ImagesWintertower.getName(), Assets.Images.ImagesWintertower.getPNG());
        this.game.load.image(Assets.Images.ImagesCoin.getName(), Assets.Images.ImagesCoin.getPNG());
        this.game.load.image(Assets.Images.ImagesMinimapwalker.getName(), Assets.Images.ImagesMinimapwalker.getPNG());
        this.game.load.image(Assets.Images.ImagesBannertopleft.getName(), Assets.Images.ImagesBannertopleft.getPNG());
        this.game.load.image(Assets.Images.ImagesWoodspikes.getName(), Assets.Images.ImagesWoodspikes.getPNG());
        this.game.load.image(Assets.Images.ImagesPortal.getName(), Assets.Images.ImagesPortal.getPNG());
        this.game.load.image(Assets.Images.ImagesSoul.getName(), Assets.Images.ImagesSoul.getPNG());
        this.game.load.image(Assets.Images.ImagesDarkdoor.getName(), Assets.Images.ImagesDarkdoor.getPNG());
        this.game.load.image(Assets.Images.ImagesDarkguard.getName(), Assets.Images.ImagesDarkguard.getPNG());
        this.game.load.image(Assets.Images.ImagesRideablebear.getName(), Assets.Images.ImagesRideablebear.getPNG());
        this.game.load.image(Assets.Images.ImagesDarkstonewall.getName(), Assets.Images.ImagesDarkstonewall.getPNG());

        this.game.load.image(Assets.Images.ImagesWhitebearhat.getName(), Assets.Images.ImagesWhitebearhat.getPNG());
        this.game.load.image(Assets.Images.ImagesBrownbearhat.getName(), Assets.Images.ImagesBrownbearhat.getPNG());
        this.game.load.image(Assets.Images.ImagesChesshat.getName(), Assets.Images.ImagesChesshat.getPNG());
        this.game.load.image(Assets.Images.ImagesChesshatrot.getName(), Assets.Images.ImagesChesshatrot.getPNG());
        this.game.load.image(Assets.Images.ImagesCowboyhat.getName(), Assets.Images.ImagesCowboyhat.getPNG());
        this.game.load.image(Assets.Images.ImagesChickenhat.getName(), Assets.Images.ImagesChickenhat.getPNG());
        this.game.load.image(Assets.Images.ImagesVikinghat.getName(), Assets.Images.ImagesVikinghat.getPNG());
        this.game.load.image(Assets.Images.ImagesBuilderhat.getName(), Assets.Images.ImagesBuilderhat.getPNG());
        this.game.load.image(Assets.Images.ImagesFoxhat.getName(), Assets.Images.ImagesFoxhat.getPNG());
        this.game.load.image(Assets.Images.ImagesHockeyhat.getName(), Assets.Images.ImagesHockeyhat.getPNG());
        this.game.load.image(Assets.Images.ImagesTankhat.getName(), Assets.Images.ImagesTankhat.getPNG());
        this.game.load.image(Assets.Images.ImagesDruidhat.getName(), Assets.Images.ImagesDruidhat.getPNG());
        this.game.load.image(Assets.Images.ImagesIcehat.getName(), Assets.Images.ImagesIcehat.getPNG());

        this.game.load.image(Assets.Images.ImagesWhitebearhaticon.getName(), Assets.Images.ImagesWhitebearhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesBrownbearhaticon.getName(), Assets.Images.ImagesBrownbearhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesChesshaticon.getName(), Assets.Images.ImagesChesshaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesCowboyhaticon.getName(), Assets.Images.ImagesCowboyhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesChickenhaticon.getName(), Assets.Images.ImagesChickenhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesVikinghaticon.getName(), Assets.Images.ImagesVikinghaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesBuilderhaticon.getName(), Assets.Images.ImagesBuilderhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesFoxhaticon.getName(), Assets.Images.ImagesFoxhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesHockeyhaticon.getName(), Assets.Images.ImagesHockeyhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesTankhaticon.getName(), Assets.Images.ImagesTankhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesDruidhaticon.getName(), Assets.Images.ImagesDruidhaticon.getPNG());
        this.game.load.image(Assets.Images.ImagesIcehaticon.getName(), Assets.Images.ImagesIcehaticon.getPNG());

        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesChicken.getName(), Assets.Atlases.AtlasesChicken.getPNG(), Assets.Atlases.AtlasesChicken.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesKnight.getName(), Assets.Atlases.AtlasesKnight.getPNG(), Assets.Atlases.AtlasesKnight.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesGuard.getName(), Assets.Atlases.AtlasesGuard.getPNG(), Assets.Atlases.AtlasesGuard.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesGardener.getName(), Assets.Atlases.AtlasesGardener.getPNG(), Assets.Atlases.AtlasesGardener.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesFollower.getName(), Assets.Atlases.AtlasesFollower.getPNG(), Assets.Atlases.AtlasesFollower.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesPig.getName(), Assets.Atlases.AtlasesPig.getPNG(), Assets.Atlases.AtlasesPig.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesWolf.getName(), Assets.Atlases.AtlasesWolf.getPNG(), Assets.Atlases.AtlasesWolf.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesBear.getName(), Assets.Atlases.AtlasesBear.getPNG(), Assets.Atlases.AtlasesBear.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesWhitebear.getName(), Assets.Atlases.AtlasesWhitebear.getPNG(), Assets.Atlases.AtlasesWhitebear.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesCarpig.getName(), Assets.Atlases.AtlasesCarpig.getPNG(), Assets.Atlases.AtlasesCarpig.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesDoor.getName(), Assets.Atlases.AtlasesDoor.getPNG(), Assets.Atlases.AtlasesDoor.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesCarwolf.getName(), Assets.Atlases.AtlasesCarwolf.getPNG(), Assets.Atlases.AtlasesCarwolf.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesPickupbot.getName(), Assets.Atlases.AtlasesPickupbot.getPNG(), Assets.Atlases.AtlasesPickupbot.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesWhitewalker.getName(), Assets.Atlases.AtlasesWhitewalker.getPNG(), Assets.Atlases.AtlasesWhitewalker.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesRideablebear.getName(), Assets.Atlases.AtlasesRideablebear.getPNG(), Assets.Atlases.AtlasesRideablebear.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesDarkdoor.getName(), Assets.Atlases.AtlasesDarkdoor.getPNG(), Assets.Atlases.AtlasesDarkdoor.getJSONHash());
        this.game.load.atlasJSONHash(Assets.Atlases.AtlasesDarkguard.getName(), Assets.Atlases.AtlasesDarkguard.getPNG(), Assets.Atlases.AtlasesDarkguard.getJSONHash());

        // Load sfx
        this.game.load.audio(Assets.Audio.SfxWhoosh1.getName(), Assets.Audio.SfxWhoosh1.getWAV(), true);

        this.loadLeaderboards();
    }

    public create() {
        AssetUtils.Loader.waitForSoundDecoding(function () {
            this.game.state.start(this.nextState);
        }, this);
    }

    private loadLeaderboards() {
        $.ajax('http://leaderboard.glor.io').done(function (data) {
            let weekly = data[1];
            let innerHTML: Array<string> = [];

            for (let i = 0; i < weekly.length; i += 2) {
                let name = weekly[i];
                let score = weekly[i + 1];
                let scoreString = score > 10000 ? (Math.floor(score / 1000.0)).toString() + 'k' : score.toString();
                innerHTML.push(`  
                    <div class="ui-leaderboard-player">
                        <span class="player-rank">#${Math.floor(i / 2) + 1}</span>
                        <span class="player-name">${escapeHtml(name)}</span>
                        <span class="player-score">${scoreString}</span>
                    </div>`);
            }

            $('#weekly-leaderboard').append(innerHTML.join(''));
        }.bind(this));
    }
}
