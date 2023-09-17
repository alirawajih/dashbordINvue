import { AbilityBuilder, Ability, ForbiddenError } from "@casl/ability";
import { ABILITY_TOKEN } from '@casl/vue';
import { initialAbility } from '@/ability/config'
const defineApilty = (user) => {
    const { can, cannot, build } = new AbilityBuilder(Ability);
    if (user == 'admin') {
        can('manage', 'all')

    } else if (user == 'user') {
        can('read', 'ACL')
    }
    return build()
}


const userData = JSON.parse(localStorage.getItem('user'))

const existingAbility = userData ? userData.position : initialAbility.position
const ability = defineApilty(existingAbility);




export { defineApilty, ability }
